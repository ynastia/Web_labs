let randomNumber;
let balance = 100;
let attemptsLeft = 3;

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 3;
    document.getElementById('attempts').innerText = attemptsLeft;
    document.getElementById('result').innerText = '';
    document.getElementById('userGuess').value = '';
    console.log('Random number (for debugging):', randomNumber);
}

function makeGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById('result').innerText = 'Please enter a valid number between 1 and 10.';
        return;
    }

    if (attemptsLeft > 0) {
        if (userGuess === randomNumber) {
            balance += 50;
            document.getElementById('result').innerText = 'Congratulations! You guessed the number!';
            document.getElementById('balance').innerText = balance;
            attemptsLeft = 0;
        } else {
            attemptsLeft -= 1;
            document.getElementById('attempts').innerText = attemptsLeft;

            if (attemptsLeft === 0) {
                balance -= 20;
                document.getElementById('balance').innerText = balance;
                document.getElementById('result').innerText = `Game over! The number was ${randomNumber}.`;
            } else {
                document.getElementById('result').innerText = 'Wrong guess! Try again.';
            }
        }
    }
}
startGame();