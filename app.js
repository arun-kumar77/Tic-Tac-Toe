let myBox = document.querySelectorAll(".box");
let myReset = document.querySelector("#reset");
let newGame = document.querySelector("#newBtn");
let newMsg = document.querySelector("#msg");
let newMsgContainer = document.querySelector(".msg-container");


let myTurn = true;

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

]

myBox.forEach((box) =>{

    box.addEventListener('click',()=>{
        console.log("clicked");
    if(myTurn==true){
      box.innerText = "O";
      myTurn = false;
    }
    else{
        box.innerText = "X";
        myTurn = true;
    }    
    box.disabled = true;

    checkWinner();
    })
})

const resetBtn = () =>{
    myTurn= true;
    EnableBox();
    newMsgContainer.classList.add("hide");

}

let DisableBox = () =>{
    for(let box of myBox){
        box.disabled = true;
    }
}

let EnableBox = () =>{
    for(let box of myBox){
        box.disabled = false;
        box.innerText="";
    }
}

let showWinner = (winner) =>{
    newMsg.innerText = `Congratulations winner is ${winner}`;
    alert(`Congratulations winner is ${winner}`);
    newMsgContainer.classList.remove("hide");
    DisableBox();

}

const checkWinner= () => { 
for(let pattern of winPatterns){
    pos1=myBox[pattern[0]].innerText,
    pos2=myBox[pattern[1]].innerText,
    pos3=myBox[pattern[2]].innerText
  
   if(pos1 !="" && pos2 !="" && pos3 !=""){ 

    if(pos1 === pos2 && pos2 === pos3){
        console.log("winner is Player : ",pos1);
        showWinner(pos1);
    }
  }
 }
};

myReset.addEventListener("click",resetBtn);
newGame.addEventListener("click",resetBtn);