let item=[];
let item1=[];
function addCart(){
    var getItem = document.getElementById("item").value;
    var getDays = document.getElementById("itemDet").value;
    item.push(getItem);
    item1.push(getDays);
    

    var a = document.getElementById("myTab");
        a.innerHTML+="<th>my Bio-Data</th><tr><td>"+item+"</td><td>"+item1+"</td></tr>";
        document.getElementById("item").value='';
        document.getElementById("itemDet").value='';
}

//------------*******-----------*******------------------
var a = document.getElementById("myB");
a.className="btn bg-primary";
// var head = document.getElementById("taskFirst").innerHTML="<h2>To-Do List</h2>"
document.getElementById("line").innerHTML="No tasks";
document.getElementById("line1").innerHTML="show all tasks";

var a = [];


function toDO(){
    var list = document.getElementById("toDo").value;
    var ul = document.createElement("ul");
    var li = document.createElement("li");

    var two = document.getElementById("taskPage");

    

    if(list==""){
        alert("enter the value");
    }
   else{
    
    ul.appendChild(li);
    two.appendChild(ul);
}
li.innerHTML=list;
    document.getElementById("toDo").value="";
    document.getElementById("line").innerHTML="";
    document.getElementById("line1").innerHTML="";
}
console.log(a);
// function show(){
//     var two = document.getElementById("taskPage");
//     two.innerText=a
// }

