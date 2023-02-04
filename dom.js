const btn = document.querySelectorAll("button");
const container = document.querySelector('.button-container');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const result = document.createElement('p');
container.appendChild(result);

// for (let i = 0; i < btn.length; i++) {
//     btn[i].style.color = 'red';
    
//     btn[i].addEventListener('click', () => {
//         playRound()
//     });
// }

// human

function rockChoice() {
    result.textContent = "You chose rock!";
    return "rock";
}
function paperChoice() {
    result.textContent = "You chose paper!";
}
function scissorsChoice() {
    result.textContent = "You chose scissors!";
}

const rockOne = rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);

// computer

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice = choices[randomNumber];

    if (computerChoice === "rock") {
        return "rock";
    }
    if (computerChoice === "paper") {
        return "paper";
    }
    if (computerChoice === "scissors") {
        return "scissors";
    }
}

// compare

function compare() {
    
}