let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(single_round(playerSelection, computerSelection));

function computerPlay() {
    let x = Math.floor(Math.random() * (4 - 1) + 1);
    switch (x) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";

    }
}

function single_round(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) return "You have a draw";

    switch (playerSelection.conCat("", computerSelection)) {

        case "rockpaper": case "scissorsrock": case "paperscissors":
            return "You Lost!";

        case "paperrock": case "rockscissors": case "scissorspaper":
            return "You Won!";

        default:
            return "OOPs, something went wrong!!!"
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("What is your move?", "rock or paper or scissors");
        console.log(single_round(playerSelection, computerSelection));
    }
}