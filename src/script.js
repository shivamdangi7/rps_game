const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(hand){
  const rand = Math.floor(Math.random()*hand.length)
  console.log('Computer Choose', hand[rand])
 return hand[rand];
}

function getHumanChoice(hand){
  let userInput = prompt(`Enter something:${hand[0]} ${hand[1]} ${hand[2]}`);
console.log("User entered:", userInput);
return userInput.toLowerCase().trim();
}


function playRound(hand){
  const computerChoice = getComputerChoice(hand);
  const humanChoice = getHumanChoice(hand);
  const options = `${computerChoice}-${humanChoice}`;
  
  switch (options) {
    case 'rock-rock':
    case 'paper-paper':
    case 'scissors-scissors':
      console.log("It's a Tie!");
      break;
    case 'rock-paper':
    case 'paper-scissors':
    case 'scissors-rock':
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
      break;
    case 'paper-rock':
    case 'scissors-paper':
    case 'rock-scissors':
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore += 1;
      break;
    default:
      console.log("Combination not recognized.");
  }
}


function playGame(){
  for(let i=0; i<3; i++){
    playRound(hand);
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

export default playGame;

