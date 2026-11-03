// main.js

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let divs = document.querySelector(".bad");


function randomize() {
    console.log(divs.length, "randomize!")

    // just the .bad div
    let rotate = randomNumber(270, 900);
    console.log("rotate", rotate);

    // 50% of the time ...
    if (Math.random() > .5) {
        scale = 1; // don't affect scale
        translateX = randomNumber(0, 1);
        translateY = randomNumber(0, 1);
    }

    divs.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

    };

// add click event listener to .bad div
divs.addEventListener("click", function () {
    randomize();
});
