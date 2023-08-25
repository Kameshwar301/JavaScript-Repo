
// let food={
//     myHead:"Tomato Pasta",
//     imgSrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
//     tit:"Ingredients",
//     ingreList:["Pasta","Oil","Onions","Salt","Tomato Pasta Sauce","Cheese"]
// };
// document.getElementById("heading").textContent=food.myHead;

// document.getElementById("pasta").src=food.imgSrc;
// document.getElementById("ingredients").textContent=food.tit;
// var list = document.getElementById("myList");

// for(let data of food.ingreList){
//     var li = document.createElement("li");
//     li.textContent=data;
//     list.appendChild(li);
// }
// *****end******pasta****------------



function validate(){
   
    var user = document.getElementById("uname").value;
   var line1 = document.getElementById("sp");
   
   if(user.length>8){
    line1.innerText="strong";
    line1.style.color='green';
   }
   else{
    line1.innerText="user name must be 8 charcater";
    line1.style.color='red';
   }

}

function pass(){
    var pas = document.getElementById("psw").value;
    var line2 = document.getElementById("sp1");
   if(pas.length>6){
    line2.innerText="strong";
    line2.style.color='green';
   }
   else{
    line2.innerText="user name must be 8 charcater";
    line2.style.color='red';
   }
}

function submit(){
    var user = document.getElementById("uname").value;
    var pas = document.getElementById("psw").value;
    if(user == pas){
        alert("Successfully logged in");
    }
    else{
        alert("Please check the credential you entered");
    }
}
 let a = 10;
 let b = 20;
 console.log(a^b);