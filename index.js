// DICE ROLLER PROGRAM

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        // get random number between 1 and 6
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        values.push(randomNumber);
        images.push(`<img src="dices/${randomNumber}.png" alt="Dice ${randomNumber}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}