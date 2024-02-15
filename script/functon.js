function playAgain() {
    const playNow = document.getElementById('home');
    playNow.classList.add('hidden');
}

function playGroundFunction() {
    const playground = document.getElementById('playground');
    playground.classList.remove('hidden');
    const randomAlphabet = 'abcdefghijklmnopqrstwxyz';
    const arrayAlphabet = randomAlphabet.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = arrayAlphabet[index];

    const screenAlphabet = document.getElementById('screen-alphabet');
    screenAlphabet.innerText = alphabet;
    addBackgroundColor(alphabet);
}

function removeBackGroundColor(elementIdd) {
    const bgRemoveColor = document.getElementById(elementIdd);
    bgRemoveColor.classList.remove('bg-orange-400');
}

function addBackgroundColor(elementId) {
    const bgColor = document.getElementById(elementId);
    bgColor.classList.add('bg-orange-400');
}

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    const screenAlphabet = document.getElementById('screen-alphabet');
    const currentAlphabet = screenAlphabet.innerText;

    if (currentAlphabet === playerPressed) {
    
        playGroundFunction();
        removeBackGroundColor(currentAlphabet);

        const currentScore = document.getElementById('current-score');
        const currentScoreText = currentScore.innerText;
        const currentScoreValue = parseInt(currentScoreText);

        const increaseCurrentScore = currentScoreValue + 1;
        currentScore.innerText = increaseCurrentScore;
    }
    else {
        const currentLife = document.getElementById('current-life');
        const currentLifeText = currentLife.innerText;
        const currentLifeTextValue = parseInt(currentLifeText);

        const reduceCurrentLife = currentLifeTextValue -1;
        currentLife.innerText = reduceCurrentLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function play() {
    playAgain()
    playGroundFunction()
}