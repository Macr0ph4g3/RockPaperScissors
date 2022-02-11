let computerDecision = 'rock';
let playerDecision = 'rock';
function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    computerDecision = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerDecision);
}

        function playRound(playerDecision, computerSelection) {
            // The first if defines the scenario both Human and Computer tie
            if (computerDecision === playerDecision)
                console.log("It's a tie!");
                //These are the win conditions for Player
                else if ((playerDecision === 'rock') && (computerDecision === 'scissors'))
                    console.log('You Win!');
                    else if ((playerDecision === 'scissors') && (computerDecision === 'paper'))
                    console.log('You Win!');
                    else if ((playerDecision === 'paper') && (computerDecision === 'rock'))
                        console.log('You Win');
                        else {
                            //If no win conditions are met, and it's not a tie, it must be a loss.
                            console.log('You Lose');
                        }
        }



