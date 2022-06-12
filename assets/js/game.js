let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score_board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("Rock");
let paper_div = document.getElementById("Paper");
let scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random () * 3);
    return choices[randomNumber]; 
}

function win(userChoice, computerChoice) {
    let userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.querySelector(".result > p").innerHTML = userChoice + " beats " + computerChoice+ "<br>You Win!!!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    let userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.querySelector(".result > p").innerHTML = computerChoice + " beats " + userChoice + "<br>You Lose !!!";
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    let userChoice_div = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.querySelector(".result > p").innerHTML = userChoice + " draws with " + computerChoice + "<br>Draw !!!";
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
    let computerChoice = getComputerChoice ();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
        win(userChoice, computerChoice);
            break;

        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
        lose(userChoice, computerChoice);
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":        
        draw(userChoice, computerChoice);
            break;        
    }


}

function main() {
    document.getElementById("Rock").addEventListener("click", () => game("Rock"));
    document.getElementById("Paper").addEventListener("click", () => game("Paper"));
    document.getElementById("Scissors").addEventListener("click", () => game("Scissors"))
}

main();
