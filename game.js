let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset_button")
let newBtn = document.querySelector(".hide")
let msg = document.querySelector("#msg")
let newGame = document.querySelector("#new_game")

let turnO = true; 

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

resetGame =() => {
    turnO = true;
    enableBox();
    newBtn.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue"
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "red"
            turnO = true;
        }
        box.disabled = true

        checkWinner();
    })
})

const disableBox = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congretulations, Winner is ${winner}`;
    newBtn.classList.remove("hide");
    disableBox();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val)
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);