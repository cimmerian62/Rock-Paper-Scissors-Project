function computerPlay() {
    let decider = Math.random();
    if (decider <= 0.333) {
        console.log("Rock")
        return "rock";
    }
    else if (decider > 0.333 && decider <= 0.666) {
        console.log("Paper")
        return "paper";
    }
    else if (decider > 0.666) {
        console.log("Scissors")
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        switch(computerSelection) {
            case 'rock':
                return 0;
            case 'scissors':
                return 1;
            default:
                return 2;
        }
    }
    if (playerSelection == 'paper') {
        switch(computerSelection) {
            case 'rock':
                return 1;
            case 'scissors':
                return 2;
            default:
                return 0;
        }
    }
    if (playerSelection == 'scissors') {
        switch(computerSelection) {
            case 'rock':
                return 2;
            case 'scissors':
                return 0;
            default:
                return 1;
        }
    }
}
function getInput() {
    while(true) {
        let res = prompt("Do you choose Rock, Paper, or Scissors?")
        res.toLowerCase();
        if (res == 'rock' || res == 'paper' || res == 'scissors') {
            return res;
        }
        else {
            console.log('Please enter a valid input.');
        }
    }
}
function game() {
    let compScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let compIn = computerPlay();
        let playerIn = getInput();
        let res = playRound(playerIn, compIn);
        switch(res) {
            case 0:
                console.log("Tie!");
                break;
            case 1:
                playerScore++;
                console.log('You win, ' + playerIn + ' beats ' + compIn + "!");
                break;
            default:
                compScore++;
                console.log('You lose, ' + compIn + ' beats ' + playerIn + "!");
        }        
    }
    if (playerScore > compScore) {
        console.log('You Win!');
    }
    else if (compScore > playerScore) {
        console.log('You lose!');
    }
    else {
        console.log('Tie!')
    }
}

game();