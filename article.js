let food = {
    data:[
        
    {
        foodName: "ไขมัน กินอย่างไร จึงจะดีต่อร่างกาย",
        image: '<img src="image/ไขมันกินอย่างไรจึงจะดีต่อร่างกาย.jpg" >',
        link:"https://www.rama.mahidol.ac.th/ramachannel/article/%E0%B9%84%E0%B8%82%E0%B8%A1%E0%B8%B1%E0%B8%99-%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3-%E0%B8%88%E0%B8%B6%E0%B8%87%E0%B8%88%E0%B8%B0%E0%B8%94%E0%B8%B5/"
        
    },
    { 
        foodName: "กินข้าวเหนียวมะม่วงอย่างไรให้ Healthy",
       
        image: '<img src="image/ข้าวเหนียวมะม่วง.jpg" >',

        link:"https://www.rama.mahidol.ac.th/ramachannel/infographic/%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AD%E0%B8%A2%E0%B9%88/"
    },
    {   
        foodName: "ดื่มกาแฟเสี่ยงเป็นมะเร็งจริงหรือไม่?",
       
        image:'<img src="image/กาแฟกับมะเร็ง.jpg" >',

        link:"https://www.rama.mahidol.ac.th/ramachannel/article/%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%A3/"
        
    },
    {  
        foodName: "วิ่งอีกครั้ง หลังหายจากโรคโควิด-19",
     
        image:'<img src="image/วิ่งอีกครั้งหลังหายจากโรคโควิด-19.jpg" >',

        link:"https://www.samitivejhospitals.com/th/article/detail/exercise-after-covid"
    },
    { 
        foodName: "ลดน้ำหนักให้ได้ผลด้วย Intermittent Fasting (IF)", 
       
        image: '<img src="image/ลดน้ำหนักด้วย-if.jpg">',

        link:"https://www.samitivejhospitals.com/th/article/detail/%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-if"
    },
    {   
        foodName: "กินช็อกโกแลตอย่างไร ให้หัวใจแข็งแรง",
     
        image: '<img src="image/กินช็อกโกแลตอย่างไรให้หัวใจแข็งแรง.jpg " >' ,

        link:"https://www.samitivejhospitals.com/th/article/detail/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%82%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%95"
    }

]
}; 
 
for(let i of food.data){
    //Create Card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag 
    let a_tag = document.createElement("a");
    a_tag.setAttribute("href",i.link);
    a_tag.innerHTML=i.image;
    imgContainer.appendChild( a_tag );
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //food name
    let name = document.createElement("h5");
    name.classList.add("food-name");
    name.innerText = i.foodName.toUpperCase();
    container.appendChild(name);
   


    

    card.appendChild(container);
    document.getElementById("food").appendChild(card);
}


//parameter passed form button  (Parameter same as category)
function filterFood(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    //select all card
    let elements = document.querySelectorAll(".card");
    //loop through all card
    elements.forEach(elements => {
        //display all card on 'all' button click
        if(value == "all"){
            elements.classList.remove("hide");
        }
        else{
            //check if element contain category class 
            if(elements.classList.contains(value)){
                //display element based in category 
                elements.classList.remove("hide");
            }
            else{
                //hide other element 
                elements.classList.add("hide");
            }
        }
    });
}
//search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let element = document.querySelectorAll(".food-name");
    let cards = document.querySelectorAll(".card");
    let check = document.querySelectorAll(".link");
    //loop through all elements 
    element.forEach((element,index) =>{
        //check if text includes the search value 
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card 
            cards[index].classList.remove("hide");
            check[index].classList.remove("hide");
           
        }
        else{
            //hide other
            cards[index].classList.add("hide");
            check[index].classList.add("hide");
        }
    })
});


//initially display all food
window.onload = () =>{
    filterFood("all");
};

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

