let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const guess = userInput.value;
            console.log(guess)
            validateGuess(guess)
        })
}

const validateGuess = (guess) => {
    if(isNaN(guess)) {
        alert('PLease enter a valid number');
    } else  if (guess < 1){
        alert('PLease enter a number more than 1');
    }else  if (guess > 100){
        alert('PLease enter a  number less than 100');
    }
    else {
      checkGuess(guess);
    }
}

const checkGuess = (guess) => {
if (guess === randomNumber) {
    displayGuess('You guessed it right');
    endGame()
} else if (guess < randomNumber) {
    displayGuess('Number is TOOO low`')
} else if (guess > randomNumber) {
    displayGuess('Number is TOOO high`')
}
}

const displayGuess = (guess) => {

}

const displayMessage = () => {

}

const endGame = () => {

}

const newGame = () => {
    
}


