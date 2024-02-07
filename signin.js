const auth = firebase.auth(); /* [เติม code ที่นี่] */
const firestore = firebase.firestore(); /* [เติม code ที่นี่] */

var user = auth.currentUser;

let Login_Button = document.getElementById("ButID_Login");
Login_Button.addEventListener("click", Login);
function Login() {
  /* [เติม code ที่นี่]  ให้สร้าง Function Login และ Logout   ได้เต็มที่  ตามแต่จะออกแบบเลย  */

  auth
    .signInWithEmailAndPassword(username.value, password.value)
    .then((userCredential) => {
      user = userCredential.user;
      //  localStorage.setItem("status",2);
      //  localStorage.setItem("auth",auth);
      
      alert("ล็อกอิน สำเร็จ");

      firestore
        .collection("projectZES")
        .doc(username.value)
        .collection("UserInfo")
        .doc("userLogin")
        .get()
        .then((doc) => {
          if (doc.exists) {
            

            window.location.href = "index.html";
            // localStorage.setItem("USERNAME", doc.data().Email);
            localStorage.setItem("Email", doc.data().Email);
            localStorage.setItem("UID", doc.data().UID);

            // openUserPage(username);
            // handleSubmit(doc.data().Username, doc.data().UID);
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      // if (auth.currentUser) {
   //   //   window.location.href = "home.html";
      //   localStorage.setItem("USERNAME", doc.data().Username);
      //   localStorage.setItem("UID", doc.data().UID);
      // } 

      //  getUser();
      // user = getUser();
      // console.log(a);
      // a = auth.currentUser;
      //  console.log("อีกดอก  =  "+ auth.currentUser);
      // window.location.href="home.html";
    })
    .catch(() => {
      alert("ไม่มีผู้ใช้นี้");
      // user = getUser();
      // console.log(a);
      // console.log("อีกดอก  =  "+ auth.currentUser);
      // console.log("อีกดอกทอง  =  "+ user);
    });
}
// function HEE() {
//   /* [เติม code ที่นี่]  เติม code ลบ Database ของ user ปัจจุบัน    จากนั้น ลบ account ของ user ทิ้ง */
//   // code ต้องไม่ทำงาน  ถ้าไม่มี user login เอาไว้
//   // Guide : ใช้ auth.currentUser จะคืนค่า null  ถ้าไม่มี user เข้าสู่ระบบเอาไว้
//   if (auth.currentUser) {
//   //  console.log("yes");
//   firestore.collection("projectZES").doc(username.value).collection("UserInfo").doc("userLogin").delete();
//   firestore.collection("CPE").doc(username.value).delete();
//   auth.currentUser.delete();
//     // .then(() => {
//     //   console.log("Data saved")
//     //   alert("Successfully")
//     // }).catch((error) => {
//     //   console.log(error)
//     // });

//   }
//   else
//     console.log("ไม่ มี HEE");
// }


