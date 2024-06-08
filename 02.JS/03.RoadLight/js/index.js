"use strict"
const BTN = document.querySelectorAll("button")
const LIGHT = document.querySelectorAll(".light")

BTN[0].addEventListener("click", function () {
    if (LIGHT[1].classList.contains("yellow")) {
        LIGHT[1].classList.remove("yellow")
    }
    else if (LIGHT[2].classList.contains("red")) {
        LIGHT[2].classList.remove("red")
    }
    LIGHT[0].classList.toggle("green")
})
BTN[1].addEventListener("click", function () {
    if (LIGHT[0].classList.contains("green")) {
        LIGHT[0].classList.remove("green")
    }
    else if (LIGHT[2].classList.contains("red")) {
        LIGHT[2].classList.remove("red")
    }
    LIGHT[1].classList.toggle("yellow")
})
BTN[2].addEventListener("click", function () {
    if (LIGHT[0].classList.contains("green")) {
        LIGHT[0].classList.remove("green")
    }
    else if (LIGHT[1].classList.contains("yellow")) {
        LIGHT[1].classList.remove("yellow")
    }
    LIGHT[2].classList.toggle("red")
})