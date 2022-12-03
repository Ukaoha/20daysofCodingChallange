"use strict";
// declraing varibles , hexadecimal is a 16 digit number
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

// create a function that picks all hex numbers randomly .
function randomColor() {
    return Math.floor(Math.random() * hexColor.length);
}

// loop through the random colors and add an eventlistner .
btn.addEventListener("click", function (e) {
    e.preventDefault()
    let firstHexColor = "#";
    let secondHexColor = "#";
    for (let i = 0; i < 6; i++) {
        let firstRandomNumber = randomColor();
        let secondRandomNumber = randomColor();
        firstHexColor += hexColor[firstRandomNumber];
        secondHexColor += hexColor[secondRandomNumber];
    }

    color.textContent = `${firstHexColor} ${secondHexColor}`;
    document.body.style.backgroundImage = "linear-gradient(to right," + firstHexColor + "," + secondHexColor + ")";
});

