// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet.toUpperCase();

    setBackgroundColorById(alphabet);
    removeBackgroundColorById(alphabet);
    
}

function playNow(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

