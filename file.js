let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let heading=document.querySelector("h1");
let btncount=0;
let div=document.querySelector("div");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const restart =()=>{
    turn0=true;
        enableBoxes();
        msgcontainer.classList.add("hide");
    }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
console.log("box was clicked");
if(turn0){
    box.innerText="O";
    turn0=false;
}
else{
    box.innerText="X";
    turn0=true;  
}
btncount++;
box.disabled=true;
checkwinner();
    });
});

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }  
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }  
    
  }
const showWinner = (winner) =>{
    msg.innerText='Congrats,we have our winner';
     msgcontainer.classList.remove("hide");
     disableBoxes();
}
const showresult=()=>{
    msg.innerText=" Sorry,there is no winner the match is draw";
    msgcontainer.classList.remove("hide");
}
const checkwinner =()=>{
for(pattern of winpatterns){
let pos1=boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;
if(pos1!=""&&pos2!=""&&pos3!=""){
    if(pos1==pos2&&pos2==pos3){
        console.log("winner",pos1);
showWinner(pos1);
    }
    else if(btncount==9){
        console.log("match is draw");
showresult();
    }
}
}
}
newbtn.addEventListener("click",restart);
resetbtn.addEventListener("click",restart);