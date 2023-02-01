const choices = ["rock", "paper", "scissors"];

// Human input
function getHumanInput(){
    const input = prompt("Choose your fate: Rock, Paper, or Scissors?").trim().toLowerCase(); // need input

    if (choices.includes(input)) {
        return input;
    } else {
        alert("There's no such choice. Try again.");
        getHumanInput();
    }
} 



// Computer choice
function getComputerChoice() {
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

// compare choice and who wins
function evaluate() {
    const human = getHumanInput();
    const computer = getComputerChoice(); 
    if (human === computer) {
        console.log("Tie.")
    }
    if (human === "rock" && computer === "scissors") {
        console.log("You win! Rock beats scissors.");
    }
    if (human === "rock" && computer === "paper") {
        console.log("You lose! Paper beats rock.");
    }
    if (human === "paper" && computer === "scissors") {
        console.log("You lose! Paper beats scissors.");
    }
    if (human === "paper" && computer === "rock") {
        console.log("You win! Paper beats rock.");
    }
    if (human === "scissors" && computer === "rock") {
        console.log("You lose! Rock beats scissors.");
    }
    if (human === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats paper.");
    }
}