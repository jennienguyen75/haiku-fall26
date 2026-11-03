    // main.js

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let divs = document.querySelector(".bad");


    function randomize() {
        console.log(divs.length, "randomize!")

        // just the .bad div
        let rotate = randomNumber(270, 900);
        let scale = 1;
        let translateX = randomNumber(0, 1);
        let translateY = randomNumber(0, 1);

        // 5% of the time ...
        if (Math.random() > .95) {
            scale = 1;
            rotate = 0;
            translateX = randomNumber(0, 1);
            translateY = randomNumber(1, 0);

            alert("Congrats! You fixed it! Click OK to claim the prize!");
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }

        divs.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

        };

    // add click event listener to .bad div
    divs.addEventListener("click", function () {
        randomize();
    });
