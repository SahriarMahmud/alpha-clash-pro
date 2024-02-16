// function play(){
//     //hide the home screen. to hide the screen add 'hidden' class to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     //show the play ground (next page)
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

// function handleKeyboardButtonPress(){
//     console.log('button pressed')
// }
// // capture keyboard key press
// document.addEventListener("keyup", handleKeyboardButtonPress)

// function handleKeyboardKeyUpEvent(event){
//     const playerPressed = event.key;
//     console.log('player pressed',playerPressed)

//     // get the expected to press
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     const expectedAlphabet = currentAlphabet.toLowerCase();
//     console.log(playerPressed, expectedAlphabet);

//     // check matched or not
//     if(playerPressed === expectedAlphabet){
//         console.log('you get a point')
//     }
//     else{
//         console.log('you missed, you lost a life.')
//     }
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key, player is expected to press
    const currentAlphabetElement= document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const  expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('yaaaaay');
        console.log('you have pressed correctly', expectedAlphabet)
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('hoynaiiiiii')
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)



function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

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

