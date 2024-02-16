function playAgain(elementId) {
    const playNow = document.getElementById(elementId);
    playNow.classList.add('hidden');
}

function addClassList(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function playGroundFunction() {
    addClassList('playground');
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

function finalScore(elementId) {
    const finalScore = document.getElementById(elementId);
    finalScore.classList.remove('hidden');
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function gameOver() {
    playGroundFunction('playground');
    playAgain('final-score');
    setElementValueById('current-life', 5)
    setElementValueById('current-score', 0)
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


        if(updatedScore === 0){
            finalScore('final-score');
            const totalScore = document.getElementById('current-score')
            const totalScoreValue = totalScore.innerText;
            setElementValueById('total-score', totalScoreValue);
            const currentScreenAlphabet = document.getElementById('screen-alphabet').innerText;
            removeBackGroundColor(currentScreenAlphabet);
            playAgain('playground');
            
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function play() {
    playAgain('home')
    playGroundFunction()
}