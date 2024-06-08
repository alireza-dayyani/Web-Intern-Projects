"use strict"
const BTN = document.querySelectorAll("button");
const IMG = document.querySelector("img");
let OPA = IMG.style.opacity;
let x, y;

BTN[0].addEventListener("click", function () {
    clearInterval(x)
    clearInterval(y)
        if (OPA < 1) {
            x = setInterval(function () {
                if (OPA >= 1) {
                    clearInterval(x)
                }
                OPA += 0.01;
                IMG.style.opacity = OPA
            }, 50)
        }
    }
);

BTN[1].addEventListener("click", function () {
    clearInterval(x)
    clearInterval(y)
        if (OPA > 0) {
            y = setInterval(function () {
                if (OPA <= 0) {
                    clearInterval(y)
                }
                OPA -= 0.01;
                IMG.style.opacity = OPA
            }, 50)
        }
    }
);
BTN[2].addEventListener("click", function () {
    clearInterval(x)
    clearInterval(y)
});