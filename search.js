let food = {
    data:[
    {
        foodName: "omelet",
        category:"Protein",
        protein: "Protein 27.6 g",
        carbohydrate: "Carbohydrate 2.2 g",
        vitamin :"Vitamin 0 g",
        fat: "Fat 62.8 g",
        image: "image/omelet.jpg"
    },
    { //ไก่ทอดกระเทียมพริกไทย
        foodName: "fried chicken with garlic and pepper",
        category:"Fat",
        protein: "Protein 18.38 g",
        carbohydrate: "Carbohydrate 5.68 g",
        vitamin :"Vitamin 0 g",
        fat: "Fat 10.02 g",
        image: "image/fried chicken with garlic and pepper.jpg"
    },
    {   //ต้มเลือดหมู
        foodName: "Tom-leud-moo",
        category:"Protein",
        protein: "Protein 5.05 g",
        carbohydrate: "Carbohydrate 1.04 g",
        vitamin :"Vitamin 0 g",
        fat: "Fat 1.30 g",
        image: "image/Tom-leud-moo.jpg"
    },
    {   //ข้าวผัดหมู
        foodName: "Fried rice with pork",
        category:"Protein",
        protein: "Protein 6.01 g",
        carbohydrate: "Carbohydrate 20.79 g",
        vitamin :"Vitamin 0.02 g",
        fat: "Fat 8.20 g",
        image: "image/Fried rice with pork.jpg"
    },
    {   //เกี๊ยวน้ำ
        foodName: "Wonton soup", 
        category:"Carbohydrate",
        protein: "Protein 2.14 g",
        carbohydrate: "Carbohydrate 2.40 g",
        vitamin :"Vitamin 0 g",
        fat: "Fat 0.98 g",
        image: "image/wonton-soup.jpg"
    },
    {   //ขนมจีนน้ำยา
        foodName: "Round rice noodles with fish curry and coconut milk",
        category:"Carbohydrate",
        protein: "Protein 2.40 g",
        carbohydrate: "Carbohydrate 9.07 g",
        vitamin :"Vitamin 0.01 g",
        fat: "Fat 5.40 g",
        image: "image/Round rice noodles with fish curry and coconut milk.jpg"
    },
    {   //แกงไตปลา
        foodName: "Fish organs sour soup",
        category:"Vitamin",
        protein: "Protein 5.28 g",
        carbohydrate: "Carbohydrate 1.33 g",
        vitamin :"Vitamin 0.03 g",
        fat: "Fat 2.21 g",
        image: "image/Fish organs sour soup.jpg"
    },
    {   //ต้มจับฉ่าย
        foodName: "chinese vegetable stew",
        category:"Vitamin",
        protein: "Protein 1.85 g",
        carbohydrate: "Carbohydrate 3.12 g",
        vitamin :"Vitamin 0.01 g",
        fat: "Fat 0.40 g",
        image: "image/chinese vegetable stew.jpg"
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
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //food name
    let name = document.createElement("h5");
    name.classList.add("food-name");
    name.innerText = i.foodName.toUpperCase();
    container.appendChild(name);
    //protein
    let protein = document.createElement("h6");
    protein.innerText = i.protein;
    container.appendChild(protein);
    //carbohydrate
    let carbohydrate = document.createElement("h6");
    carbohydrate.innerText = i.carbohydrate;
    container.appendChild(carbohydrate);
    //fat
    let fat = document.createElement("h6");
    fat.innerText = i.fat;
    container.appendChild(fat);
    //vitamin
    let vitamin = document.createElement("h6");
    vitamin.innerText = i.vitamin;
    container.appendChild(vitamin);
    


       

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
    
    //loop through all elements 
    element.forEach((element,index) =>{
        //check if text includes the search value 
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card 
            cards[index].classList.remove("hide");
        }
        else{
            //hide other
            cards[index].classList.add("hide");
        }
    })
});


//initially diaplay all food
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


