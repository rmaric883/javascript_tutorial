// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 5;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert('Please enter a valid number')
    } else if (guess < minNum || guess > maxNum){
        window.alert(`Please eneter a number between ${minNum} - ${maxNum}`)
    } else {
        attempts++;
        if (guess < randomNumber) {
            window.alert('TOO LOW! TRY AGAIN!')
        } else if (guess > randomNumber) {33
            window.alert('TOO HIGH! TRY AGAIN!')
        } else {
            window.alert(`CORRECT! The randomNumber was ${randomNumber}. It took you ${attempts} attempts`)
            running = false;
        }
    }
}
