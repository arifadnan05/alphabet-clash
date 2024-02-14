function homeBtn() {
    const playNow = document.getElementById('home');
    playNow.classList.add('hidden');
    const palyGround = document.getElementById('playground');
    palyGround.classList.remove('hidden');

    const randomAlphabet = 'abcdefghijklmnopqrstwxyz'.toUpperCase();
    const arrayAlphabet = randomAlphabet.split('');
    

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = arrayAlphabet[index];
    // console.log(alphabet)

    const screenAlphabet = document.getElementById('screen-alphabet');
    screenAlphabet.innerText = alphabet;
}