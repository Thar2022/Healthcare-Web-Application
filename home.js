const text_IF_OMAD = document.getElementById("text_IF_OMAD_2");
const select_IF_OMAD = document.getElementById("select_IF_OMAD");
const Page_IF_OMAD = document.getElementById("Page_IF_OMAD");
const sum_succes = document.getElementById("sum_succes");
const succes = document.getElementById("succes");
const no_succes = document.getElementById("no_succes");
let Date_do; // ใช้กับฟังชันรีเซ้า
let Date_due;
let time_target_number;
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const secound = document.getElementById("secound");
const time = new Date();
const time_day = new Date().getDate();
const time_hour = new Date().getHours();
let but_can = 0;
let date_do4;

console.log(time);
// console.log(time_day );
// console.log(time_hour );

let check_IF_OMAD;
let time_target;

let IF_Button = document.getElementById("IF");
IF_Button.addEventListener("click", IF);
function IF() {
  select_IF_OMAD.hidden = 1;
  Page_IF_OMAD.hidden = 0;

  //   check_IF_OMAD = 1;          โหมดเก้บค่าทำได้ ไม่ได้ if กับ omad ยังไม่ใช้ เก้บรวใกันไปก่อน
  time_target = time;
  time_target.setHours(time.getHours() + 16);
  time_target_number = time_target;
  time_target_number = time_target_number - 0;
  //   console.log("1234123123dd = "+ time_target_number );
  database();

  result();

  //   console.log(time_target);
  //   console.log(typeof( time_target));
  //   const currenttime = new Date();
  //   console.log(currenttime);
  //   console.log(typeof( currenttime));
  //   const hee =  time_target-currenttime;
  //   console.log("hee = "+ hee);
}

let OMAD_Button = document.getElementById("OMAD");
OMAD_Button.addEventListener("click", OMAD);
function OMAD() {
  select_IF_OMAD.hidden = 1;
  Page_IF_OMAD.hidden = 0;
  text_IF_OMAD.innerHTML = "OMAD อด 23ชม.";

  //   check_IF_OMAD = 0;     โหมดเก้บค่าทำได้ ไม่ได้ if กับ omad ยังไม่ใช้ เก้บรวใกันไปก่อน
  time_target = time;
  time_target.setHours(time.getHours() + 23);
  database();

  result();
}
let setin = 1;
function updateCountDown() {
  if (but_can && uId != null) {
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    secound.innerHTML = "00";
    setin = 0;
  } else {
    const currenttime = new Date();
    const diff = time_target - currenttime;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    hour.innerHTML = h < 10 ? "0" + h : h;
    minute.innerHTML = m < 10 ? "0" + m : m;
    secound.innerHTML = s < 10 ? "0" + s : s;
    console.log("butcan = " + but_can);
  }
}
if (setin == 1) {
  setInterval(updateCountDown, 1000);
}

function database() {
  const date_2 = new Date();
  const date_3 = date_2 - 0;
  let date_do;
  //   console.log("hssssssssss" + date_3);
  if (uId != null) {
    const firestore = firebase.firestore();
    firestore
      .collection("projectZES")
      .doc(emaiL)
      .collection("UserInfo")
      .doc("Personal")
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log("xxxxxxxxxxxxxxxxxxxx = "+doc.data().Date_due);
          // console.log("yyyyy = "+(doc.data().Date_due - date_3));

          // console.log("Document data: ssss", doc.data().Date_due);  //ดึงวันครบกำหนดมา
          if (doc.data().Date_due - date_3 <= 0) {
            //วันหมดอายุ - วันตอนนี้ //   console.log("ผ่าาาาาาาาาาาาาาาาาาน" );

            firestore ////ดึงข้อมูลจำนวนวันที่ทำ
              .collection("projectZES")
              .doc(emaiL)
              .collection("UserInfo")
              .doc("Personal")
              .get()
              .then((doc) => {
                if (doc.exists) {
                  date_do = doc.data().Date_do;
                  date_do += 1;

                  firestore
                    .collection("projectZES")
                    .doc(emaiL)
                    .collection("UserInfo")
                    .doc("Personal")
                    .update({
                      Date_do: date_do,
                    });
                    date_do4=date_do;
                }
              });

            //   console.log("วั xxx = " + xxx); //อยู่นอกฟังชันไม่ได้ ไม่งั้นต่าจะเปน undefin

            firestore
              .collection("projectZES")
              .doc(emaiL)
              .collection("UserInfo")
              .doc("Personal")
              .update({
                Date_start: date_3,
                Date_due: time_target_number,
              });
          } else {
            const firestore = firebase.firestore();
            let xyz;
            firestore
              .collection("projectZES")
              .doc(emaiL)
              .collection("UserInfo")
              .doc("Personal")
              .get()
              .then((doc) => {
                if (doc.exists) {
                  xyz = doc.data().Date_due;
                  time_target = xyz;
                }
              });
          }
        }
      });
  }
}

function result() {
  if (uId != null) {
    const firestore = firebase.firestore();
    let xz;
    firestore
      .collection("projectZES")
      .doc(emaiL)
      .collection("UserInfo")
      .doc("Personal")
      .get()
      .then((doc) => {
        if (doc.exists) {
          xz = doc.data().Date_do;

          sum_succes.value = xz;
        }
      });

    firestore
      .collection("projectZES")
      .doc(emaiL)
      .collection("UserInfo")
      .doc("Personal")
      .get()
      .then((doc) => {
        if (doc.exists) {
          var x = doc.data().Date_Fail;
          console.log(xz);
          succes.value = xz - x;
        }
      });

    firestore
      .collection("projectZES")
      .doc(emaiL)
      .collection("UserInfo")
      .doc("Personal")
      .get()
      .then((doc) => {
        if (doc.exists) {
          var x = doc.data().Date_Fail;

          no_succes.value = x;
        }
      });
  } else {
    sum_succes.value = "-";
    succes.value = "-";
    no_succes.value = "-";
  }
}

let cancle_Button = document.getElementById("cancle");
cancle_Button.addEventListener("click", cancle);
function cancle() {
  if (uId != null) {
    const firestore = firebase.firestore();
    let date_fail;
    firestore
      .collection("projectZES")
      .doc(emaiL)
      .collection("UserInfo")
      .doc("Personal")
      .get()
      .then((doc) => {
        if (doc.exists && but_can == 0) {
          date_fail = doc.data().Date_Fail;
          date_fail += 1;
          no_succes.value = date_fail;
          firestore
            .collection("projectZES")
            .doc(emaiL)
            .collection("UserInfo")
            .doc("Personal")
            .update({
              Date_Fail: date_fail,
            });
            
          but_can = 1;
          sum_succes.value=date_do4;
        }
      });
    firestore
      .collection("projectZES")
      .doc(emaiL)
      .collection("UserInfo")
      .doc("Personal")
      .update({
          Date_due: 111111,
      });
  } else window.location.href = "index.html";
}

//ระบบล็อกเอ๊า
let uId = localStorage.getItem("UID");
let emaiL = localStorage.getItem("Email");
console.log(emaiL);
console.log(uId);
if (uId != null) {
  document.getElementById("login").setAttribute("id", "logout");
  document.getElementById("logout").innerText = "log-out";
}

let Logout_Button = document.getElementById("logout");
Logout_Button.addEventListener("click", Logout);

function Logout() {
  localStorage.removeItem("Email");
  localStorage.removeItem("UID");
  document.getElementById("logout").setAttribute("id", "login");
  document.getElementById("login").innerText = "login";
}

//ระบบล็อกเอ๊า
