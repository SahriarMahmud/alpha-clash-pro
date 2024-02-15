// function play(){
//     //hide the home screen. to hide the screen add 'hidden' class to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     //show the play ground (next page)
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show on the screen)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

