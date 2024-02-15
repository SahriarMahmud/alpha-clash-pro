// function play(){
//     //hide the home screen. to hide the screen add 'hidden' class to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     //show the play ground (next page)
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}