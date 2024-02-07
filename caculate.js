

// let  activityLevel ;

// function call_sum() {
//     const weight = getInputNumberValue("weight");
//     const height = getInputNumberValue("height");
//     const age = getInputNumberValue("age");
//     const gender = getSelectedValue("gender");
//     const activityLevel = getSelectedValue("activity__level");
//     const bmi = weight/((height/100)**2);
//     console.log(weight);
//     console.log( height);
//     console.log(age);
//     console.log( gender);
//     console.log( activityLevel);
//     console.log( bmi);
    
//     }


// let Login_Button0 = document.getElementById('exercise-0');
// Login_Button0.addEventListener("click",calculate);
// function calculate() {
//     activityLevel =1;
//      call_sum();
     
   
// }
// let Login_Button1 = document.getElementById('exercise-1');
// Login_Button1.addEventListener("click",calculate1);
// function calculate1() {
//     activityLevel =2;
//     call_sum();
     
   
// }
// let Login_Button2 = document.getElementById('exercise-2');
// Login_Button2.addEventListener("click",calculate2);
// function calculate2() {
//     activityLevel =3;
//      call_sum();
     
   
// }
// let Login_Button3 = document.getElementById('exercise-3');
// Login_Button3.addEventListener("click",calculate3);
// function calculate3() {
//     activityLevel =4;
//      call_sum();
     
   
// }
// let Login_Button4 = document.getElementById('exercise-4');
// Login_Button4.addEventListener("click",calculate4);
// function calculate4() {
//     activityLevel =5;
//      call_sum();
     
   
// }




const form = document.getElementById('form');
        form.addEventListener('submit', handleSubmit);

        function handleSubmit(event) {
            event.preventDefault();

            const weight = getInputNumberValue("weight");
            const height = getInputNumberValue("height");
            const age = getInputNumberValue("age");
            const gender = getSelectedValue("gender");
            const activityLevel = getSelectedValue("activity__level");

            const bmi = weight/((height/100)**2);
            let result="";

            const bmr = Math.round(
            gender === 'female'
                ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
                : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
            );

            const tdee = Math.round(bmr * Number(activityLevel));
            
            document.getElementById("outBMI");
            outBMI.value =  bmi.toFixed(2);
            document.getElementById("outBMR");
            outBMR.value  =  bmr  + " calorias";
            document.getElementById("outTDEE");
            outTDEE.value  =  tdee + " calorias";
           
          adduserinfo(weight,height,age,gender,bmi.toFixed(2),bmr,tdee);   ////ฟังชัน data base
            
            }

            function getSelectedValue(id) {
            const select = document.getElementById(id);
            return select.options[select.selectedIndex].value;
            }

            function getInputNumberValue(id) {
            return Number(document.getElementById(id).value);
            }


//ระบบล็อกเอ๊า
let uId = localStorage.getItem("UID")
let emaiL = localStorage.getItem("Email")
console.log(emaiL);
console.log(uId);
if(uId!=null)
     {
     
     document.getElementById('login').setAttribute('id','logout');
     document.getElementById('logout').innerText="log-out";
    
}

let Logout_Button = document.getElementById("logout");
Logout_Button.addEventListener("click", Logout);

function Logout() {
     localStorage.removeItem("Email")
    localStorage.removeItem("UID")
    document.getElementById('logout').setAttribute('id','login');
     document.getElementById('login').innerText="login";
}

//ระบบล็อกเอ๊า




//(weight+" "+height+" "+age+" "+gender+" "+activityLevel+" "+bmi.toFixed(2)+" "+bmr+" "+tdee)
function adduserinfo(weight,height,age,gender,bmi,bmr,tdee){
     // console.log("ไอสาสสสสสสสส");
     const firestore = firebase.firestore();
     firestore.collection("projectZES").doc(emaiL).collection("UserInfo").doc("Personal").update({
          Weight:weight, 
          Height:height,                          //ถ้าจะเพิ่มข้อมูลแบบมีด้อกยุแล้วใช้ update
          Age:age,
          Gender:gender,
          Age:age,
          Gender:gender,
          BMI:bmi,
          BMR:bmr,
          TDEE:tdee
        })
}