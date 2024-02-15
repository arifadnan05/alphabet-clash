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

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    const screenAlphabet = document.getElementById('screen-alphabet');
    const currentAlphabet = screenAlphabet.innerText;

    if (currentAlphabet === playerPressed) {
    
        playGroundFunction();
        removeBackGroundColor(currentAlphabet);

        const currentScore =  getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);

    }
    else {
        const currentLife = getElementValueById('current-life');
        const updatedScore = currentLife - 1;
        setElementValueById('current-life', updatedScore);
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function play() {
    playAgain()
    playGroundFunction()
}