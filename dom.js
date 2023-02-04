const container = document.querySelector('.button-container');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const humanChoice = document.createElement('p');
container.appendChild(humanChoice);

const computerChoice = document.createElement('p');
container.appendChild(computerChoice);

const result = document.getElementById("result");
result.textContent = "test";

const round = document.getElementById("round");
// const btn = document.querySelectorAll("button");
// for (let i = 0; i < btn.length; i++) {
//     btn[i].style.color = 'red';
    
//     btn[i].addEventListener('click', () => {
//         playRound()
//     });
// }

// solution 1
// can put getComputerChoice() and compare() in rockChoice() etc.

// solution 2
// need one function call which has all choices inside
// then call it in compare with getComputerChoice()

function rockChoice() {
    humanChoice.textContent = "You chose rock!";
    const human = "rock"; 
    const computer = getComputerChoice();
    compare(human, computer);
}
function paperChoice() {
    humanChoice.textContent = "You chose paper!";
    const human = "paper"; 
    const computer = getComputerChoice();
    compare(human, computer);
}
function scissorsChoice() {
    humanChoice.textContent = "You chose scissors!";
    const human = "scissors"; 
    const computer = getComputerChoice();
    compare(human, computer);
}

// function getHumanChoice() {
//     let humanChoice = "";
//     if (rockChoice() === true) {
//         humanChoice = "rock";
//     }
//     if (paperEvent) {
//         humanChoice = "paper";
//     }
//     if (scissorsEvent) {
//         humanChoice = "scissors";
//     }
    
//     return humanChoice;
// }
// getHumanChoice();
let roundCount = 1;
while (roundCount <= 5 ) {   
    rock.addEventListener('click', rockChoice);
    paper.addEventListener('click', paperChoice);
    scissors.addEventListener('click', scissorsChoice);
    
    if (roundCount === 1) {
        round.textContent = "Round: 1";
    }
    if (roundCount === 2) {
        round.textContent = "Round: 2";
    }
    if (roundCount === 3) {
        round.textContent = "Round: 3";
    }
    if (roundCount === 4) {
        round.textContent = "Round: 4";
    }
    if (roundCount === 5) {
        round.textContent = "Round: 5";
    }
    roundCount++;
}
// human


// computer

function getComputerChoice() {
    const choices = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    // alert(randomNumber);
    let choice = choices[randomNumber];

    if (choice === choices[1]) {
        computerChoice.textContent = "Computer chose rock!";
        return "rock";
    }
    if (choice === choices[2]) {
        computerChoice.textContent = "Computer chose paper!";
        return "paper";
    }
    if (choice === choices[3]) {
        computerChoice.textContent = "Computer chose scissors!";
        return "scissors";
    }
}

// compare

function compare(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
    } 
    // winning conditions
    if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You WIN!";
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "Computer wins! You LOSE!";
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You WIN!";
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "Computer wins! You LOSE!";
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You WIN!";
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "Computer wins! You LOSE!";
        
    }
    
}
