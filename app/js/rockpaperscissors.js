////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    //Code for determining winner of rock paper scissors
    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    }
    else if (computerMove === 'rock' && playerMove === 'scissors') {
        winner = 'computer';
    }
    else if (computerMove === 'paper' && playerMove === 'rock') {
        winner = 'computer';
    }
    else if (computerMove === 'scissors' && playerMove === 'paper') {
        winner = 'computer';
    }
    else {
        winner = 'unknown result';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var roundWinner = getWinner(playerMove,computerMove);
    if (roundWinner === 'player') {
        console.log("The human " + roundWinner + " has won.");
        playerWins +=1;
    }
    else if (roundWinner === 'computer') {
        console.log("The " + roundWinner + " is becoming increasingly self-aware.");
        computerWins +=1;
    }
    else if (roundWinner === 'tie') {
        console.log("Tie game. Nobody wins. Play again");
    }
    console.log("Player chose " + playerMove + " while the Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins);
    
}
if (playerWins === 5) {
    return "The humans are superior";
}
else if (computerWins === 5) {
    return "Skynet has taken over.  The machines have won";
}
return [playerWins, computerWins];
}

function playToX() {
    console.log("Let's play Rock, Paper, Scissors");
    function getGames() {
        console.log("How many games would you like to play to?")
        return prompt();
    }
    var games = getGames();
    var playerWins = 0;
    var computerWins = 0;
while (playerWins < games && computerWins < games) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var roundWinner = getWinner(playerMove,computerMove);
    if (roundWinner === 'player') {
        console.log("The human " + roundWinner + " has won.");
        playerWins +=1;
    }
    else if (roundWinner === 'computer') {
        console.log("The " + roundWinner + " is becoming increasingly self-aware.");
        computerWins +=1;
    }
    else if (roundWinner === 'tie') {
        console.log("Tie game. Nobody wins. Play again");
    }
    console.log("Player chose " + playerMove + " while the Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins);
    
}
if (playerWins == games) {
    return "The humans are superior";
}
else if (computerWins == games) {
    return "Skynet has taken over.  The machines have won";
}
return [playerWins, computerWins];
}
playToX();

