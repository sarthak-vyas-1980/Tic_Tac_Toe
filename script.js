let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;
const winCond=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(count<=9){
      if(turnX){
        box.innerText='X';
      } else {
        box.innerText='O';
      }
      count++;
      turnX = !turnX;
      box.disabled = true;
      winCheck();
      if(count==9)gameDraw();
    }
  });
});

function winCheck(){
  winCond.forEach((cond)=>{
    let v1=boxes[cond[0]].innerText;
    let v2=boxes[cond[1]].innerText;
    let v3=boxes[cond[2]].innerText;

    if(v1!="" && v2!="" && v3!=""){
      if(v1==v2 && v2==v3){
        winner(v1);
      }
    }
  });
}

resetBtn.addEventListener("click",gameReset);

function winner(player){
  disable();
  msg.innerText=`Congratulations, Winner: Player${player}`;
  msgContainer.classList.remove("hide");
  newGameBtn.classList.remove("hide");
  newGameBtn.addEventListener("click",newGame);
}
function gameDraw(){
  msg.innerText=`Game Draw!!!`;
  msgContainer.classList.remove("hide");
  newGameBtn.classList.remove("hide");
  disable();  
  newGameBtn.addEventListener("click",newGame);
}
function gameReset(){
  count= 0;
  turnX= true;
  boxes.forEach((box)=>{
    box.innerText= "";
    box.disabled= false;
  })
  msgContainer.classList.add("hide");
  newGameBtn.classList.add("hide");
}
function newGame(){
  count= 0;
  turnX= true;
  boxes.forEach((box)=>{
    box.innerText= "";
    box.disabled= false;
  })
  newGameBtn.classList.add("hide");
  msgContainer.classList.add("hide");
}
function disable(){
  boxes.forEach((box)=>{
    box.disabled= true;
  })
}