"use strict";
const BTN = document.querySelectorAll("button");
const IMG = document.querySelector("img");
let OPA = parseFloat(IMG.style.opacity);
let x, y;

BTN[0].addEventListener("click", function () {
    clearInterval(y);
    clearInterval(x);
    if (OPA < 1) {
        x = setInterval(function () {
            if (OPA >= 1) {
                clearInterval(x);
            }
            OPA += 0.01;
            console.log(OPA);
            IMG.style.opacity = OPA;
        }, 40);
    }
}
);

BTN[1].addEventListener("click", function () {
    clearInterval(x);
    clearInterval(y);
    if (OPA > 0) {
        y = setInterval(function () {
            if (OPA <= 0) {
                clearInterval(y);
            }
            OPA -= 0.01;
            console.log(OPA);
            IMG.style.opacity = OPA;
        }, 40);
    }
}
);