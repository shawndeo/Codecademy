function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
      userChoice = 'rock'
      console.log(userChoice)
      break
    case 'paper':
      userChoice = 'paper'
      console.log(userChoice)
      break
    case 'scissors':
      userChoice = 'scissors'
      console.log(userChoice)
      break
    default:
      console.log('Error. Input a proper choice.')
  return userChoice
  }
};

getUserChoice('rock')

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3)
  switch (computerChoice) {
    case 0:
      //console.log('rock')
      computerChoice = 'rock'
      console.log(computerChoice)
      break
    case 1:
      //console.log('paper')
      computerChoice = 'paper'
      console.log(computerChoice)
      break
    case 2:
      //console.log('scissors')
      computerChoice = 'scissors'
      console.log(computerChoice)
      break
  }
}

getComputerChoice()

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log('TIE!');
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    console.log('Computer\'s Paper beats User\'s Rock!')
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    console.log('User\'s Rock beats Computer\'s Scissors!')
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    console.log('User\'s Paper beats Computer\'s Rock!')
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    console.log('Computer\'s Scissors beats User\'s Paper!')
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    console.log('Computer\'s Rock beats User\'s Scissors!')
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    console.log('User\'s Scissors beats Computer\'s Paper!')
  }
}

determineWinner(userChoice, computerChoice)