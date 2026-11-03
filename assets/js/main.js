// main.js

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let divs = document.querySelectorAll(".bad");


function randomize() {
    console.log(divs.length, "randomize!")

    // just the .bad divs
    divs.forEach(function (badDiv) {
    let rotate = randomNumber(270, 900);
    console.log("rotate", rotate);

    // 50% of the time ...
    if (Math.random() > .5) {
        scale = 1; // don't affect scale
        translateX = randomNumber(0, 1);
        translateY = randomNumber(0, 1);
    }

    badDiv.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

    });
}

// add click event listener to each .bad div
divs.forEach(function (badDiv) {
    badDiv.addEventListener("click", function () {
        badDiv.classList.add("active");
        randomize();
    });
});
