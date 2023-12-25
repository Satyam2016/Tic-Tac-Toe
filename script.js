let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let win=document.querySelector("#win");

let turnO=true ; // true for playerO and false for playerX

const winningCombinations=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
];

let count=1;

boxes.forEach((box)=>{   
     box.addEventListener("click",()=>{
          count++;
          //console.log("clicked");
          if(turnO){  //playerO turn 
               box.innerText="O";
               box.style.color="black"
               turnO=false;
          }
          else{ //playerX turn
               box.innerText="X";
               box.style.color="red"
               turnO=true;
          }
          box.disabled=true;
          checkWinner();
          if(count===10 && !checkWinner()){
               showDraw();
          }
     })
})

const showWinner=(winner)=>{
     win.innerText=`Congratulations! ${winner} is the winner`;
     win.style.visibility= "visible";
}

const showDraw=()=>{
     win.innerText=`It's a draw`;
     win.style.visibility= "visible";
}


const checkWinner=()=>{
     for(pattern of winningCombinations){
          if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText && boxes[pattern[0]].innerText!=""){
               boxes[pattern[0]].style.backgroundColor="#ff4d6d";
               boxes[pattern[0]].style.animation="pulsebeat 0.5s infinite";
               boxes[pattern[1]].style.backgroundColor="#ff4d6d";
               boxes[pattern[1]].style.animation="pulsebeat 0.5s infinite";
               boxes[pattern[2]].style.backgroundColor="#ff4d6d";
               boxes[pattern[2]].style.animation="pulsebeat 0.5s infinite";
               resetBtn.innerText="New Game";
               boxes.forEach((box)=>{
                    box.disabled=true;
               })
               showWinner(boxes[pattern[0]].innerText);
               return true;
          }
     }
     return false;
}

const resetGame=()=>{
     boxes.forEach((box)=>{
          box.innerText="";
          box.disabled=false;
          box.style.backgroundColor="#52b788";
     })
     win.innerText="";
     win.style.visibility="hidden";
     turnO=true;
     count=1;
     boxes.forEach((box)=>{
          box.style.animation="none";
     })
     resetBtn.innerText="Reset";
}

resetBtn.addEventListener("click",resetGame);

