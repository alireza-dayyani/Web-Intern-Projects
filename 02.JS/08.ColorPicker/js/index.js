"use strict";
const SLIDER = document.querySelectorAll("input");
const PALLETE = document.querySelectorAll(".pallete");
const FINAL = document.querySelector(".final-color");
const NUMBER = document.querySelectorAll("span");
let red = 255, green = 255, blue = 255, alpha = 1;

SLIDER[0].addEventListener("input", function () {
    red = SLIDER[0].value;
    PALLETE[0].style.backgroundColor = `rgb(${red},0,0)`;
    NUMBER[0].textContent = red;
    updateFinal();
});

SLIDER[1].addEventListener("input", function () {
    green = SLIDER[1].value;
    PALLETE[1].style.backgroundColor = `rgb(0,${green},0)`;
    NUMBER[1].textContent = green;
    updateFinal();
});

SLIDER[2].addEventListener("input", function () {
    blue = SLIDER[2].value;
    PALLETE[2].style.backgroundColor = `rgb(0,0,${blue})`;
    NUMBER[2].textContent = blue;
    updateFinal();
});

SLIDER[3].addEventListener("input", function () {
    alpha = SLIDER[3].value / 100;
    NUMBER[3].textContent = alpha;
    updateFinal();
});

function updateFinal() {
    FINAL.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
    FINAL.innerHTML = `<span>rgba(${red},${green},${blue},${alpha})</span>`;
}
