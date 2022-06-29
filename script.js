let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');
function computerPlay() {
    var myArray = [
        "rockt",
        "paper",
        "scissors"
    ];

    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return (randomItem);

}



function play(playerSelection, computerSelection) {

     computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
           
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
           
        }
    }

    document.getElementById('result').innerHTML = result
    return

}
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        play(button.value)
    })
})





