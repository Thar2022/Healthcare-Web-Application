const TIME = new Date();
const TIME2 = TIME - 0;

let Register_Button = document.getElementById("But_Sign-up");
Register_Button.addEventListener("click", Register);

function Register() {
  const auth = firebase.auth(); /* [เติม code ที่นี่] */
  const firestore = firebase.firestore(); /* [เติม code ที่นี่] */
  var user = auth.currentUser;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var pass2 = document.getElementById("password-2").value;
  /* [เติม code ที่นี่]  เติมคำสั่ง Register, Login และ สร้าง Database */
  /* ข้อแนะนำ : ไม่ต้องใช้ .then  .catch ในส่วน Login (ถ้าคำสั่ง Login อยู่ด้านใน .then ของRegister)    เพราะเช็ค error ตอน Register ไปแล้ว */
  if (pass == pass2) {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        user = userCredential.user;
        //auth.signInWithEmailAndPassword(email, pass) .then(() => {console.log("HEE")}).catch(() => {console.log("HUM")});
        firestore
          .collection("projectZES")
          .doc(email)
          .collection("UserInfo")
          .doc("userLogin")
          .set({
            Email: email,
            Password: pass,
            UID: user.uid
            // Date_start: TIME2,
            // Date_due: TIME2,
            // Date_do: 0,
            // Date_Fail: 0,
          });
          let a=0;
          a=1;
        firestore
          .collection("projectZES")
          .doc(email)
          .collection("UserInfo")         //คอเล็กชั่นเหมือนกัน ส้รางได้
          .doc("Personal")
          .set({
            Date_start: TIME2,
            Date_due: TIME2,
            Date_do: 0,
            Date_Fail: 0,
          });
        console.log(TIME2);

        alert("สมัครสำเร็จ");
        setTimeout(() => {
          window.location.href = "signin.html";
        }, 2000);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log = "error " + errorCode + " : " + errorMessage;
        alert("โปรดกรอกอีเมลที่ถูกต้อง");
      });
  } else {
    alert("รหัสผ่านไม่ตรงกันครัช");
  }

  // setTimeout(linuxhintFunc,10000);
  //  check(1);
}
