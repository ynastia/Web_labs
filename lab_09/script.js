document.getElementById('startGame').addEventListener('click', () => {
    const cardCount = parseInt(document.getElementById('cardCount').value);

    if (isNaN(cardCount) || cardCount % 2 !== 0) {
        alert('Будь ласка, введіть парне число!');
        return;
    }

    startGame(cardCount);
});

function startGame(cardCount) {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    const cardValues = generateCardValues(cardCount);
    shuffleArray(cardValues);

    const cards = cardValues.map((value) => createCard(value));
    cards.forEach((card) => gameBoard.appendChild(card));

    gameBoard.style.gridTemplateColumns = `repeat(4, 1fr)`;
}

function generateCardValues(count) {
    const values = [];
    for (let i = 1; i <= count / 2; i++) {
        values.push(i, i);
    }
    return values;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = value;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener('click', () => flipCard(card));

    return card;
}

let firstCard = null;
let secondCard = null;

function flipCard(card) {
    if (firstCard && secondCard) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
    } else if (firstCard !== card) {
        secondCard = card;
        checkMatch();
    }
}

function checkMatch() {
    const firstValue = firstCard.querySelector('.card-back').textContent;
    const secondValue = secondCard.querySelector('.card-back').textContent;

    if (firstValue === secondValue) {
        firstCard = null;
        secondCard = null;
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
        }, 1000);
    }
}

