let playerScore = 0;
let compScore = 0;

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
function displayRes(playerSelection, computerSelection) {
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${compScore}`;
    chose.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}`;
    if (playerScore >= 5) {
        res.textContent = "Player wins!"
    }
    else if (compScore >= 5) {
        res.textContent = "Computer wins!"
    }
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerScore >= 5 || compScore >= 5) {
        playerScore = 0;
        compScore = 0;
        res.textContent = "";
    }
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'paper':
                compScore++;
                console.log(compScore);

                break;
            case 'scissors':
                playerScore++;
                break;
            default:
        }
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock':
                playerScore++;
                break;
            case 'scissors':
                compScore++;
                console.log(compScore);
                break;
            default:
        }
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock':
                compScore++;
                console.log(compScore);
                break;
            case 'scissors':
                playerScore++;
                break;
            default:
        }
    }
    console.log(playerScore);
    console.log(compScore);
    displayRes(playerSelection, computerSelection);
}




const buttons = document.querySelectorAll('button')
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const chose = document.querySelector('.chose');
const res = document.querySelector('.res');
const rbtn = document.querySelector('#rbtn');
const pbtn = document.querySelector('#pbtn');
const sbtn = document.querySelector('#sbtn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.textContent.toLowerCase());
    });
  });


