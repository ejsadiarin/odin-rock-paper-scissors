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

/**
 *  functions
 * */ 

// human
function rockChoice() {
    humanChoice.textContent = "You chose rock!";
    return "rock";
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



// rounds playGame()
function playGame() {
    const human = "rock"; // change to rock.value or choice.value in button or add if
    const computer = getComputerChoice();
    compare(human, computer);
}

// reset


// event listener buttons for human choice
rock.addEventListener('click', rockChoice); // change to playGame
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);