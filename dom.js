const btn = document.querySelectorAll("button");
const container = document.querySelector('.button-container');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const humanChoice = document.createElement('p');
container.appendChild(humanChoice);

const computerChoice = document.createElement('p');
container.appendChild(computerChoice);

const result = document.createElement('p');
container.appendChild(result);

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
    return "rock";
}
function paperChoice() {
    humanChoice.textContent = "You chose paper!";
    return "paper";
}
function scissorsChoice() {
    humanChoice.textContent = "You chose scissors!";
    return "scissors";
}

rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);

// human

function getHumanChoice() {
    const humanChoice = rockChoice() 
        || paperChoice()
        || scissorsChoice();
    return humanChoice;
}

// computer

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let choice = choices[randomNumber];

    if (choice === "rock") {
        computerChoice.textContent = "Computer chose rock!"
        return "rock";
    }
    if (choice === "paper") {
        computerChoice.textContent = "Computer chose paper!"
        return "paper";
    }
    if (choice === "scissors") {
        computerChoice.textContent = "Computer chose scissors!"
        return "scissors";
    }
}

// compare

function compare(humanChoice, computerChoice) {
    if (rockChoice() === "rock") {
        result.textContent = "You win!"
    }
}