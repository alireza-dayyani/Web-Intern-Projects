"use strict"
const BTN = document.querySelector("button")
const MODAL = document.querySelector(".modal")
const MODALBG = document.querySelector(".modal-bg")
const CLOSE = document.querySelector(".close")

BTN.addEventListener("click", function () {
    MODAL.style.display = "flex";
    MODALBG.style.display = "block";
    setTimeout(function () {
        MODAL.classList.add("modal-active");
        CLOSE.classList.add("close-active");
        MODALBG.classList.add("modal-bg-active")
    }, 100)
})
MODALBG.addEventListener("click", function () {
    MODAL.classList.remove("modal-active")
    CLOSE.classList.remove("close-active")
    MODALBG.classList.remove("modal-bg-active")
    setTimeout(function () {
        MODAL.style.display = "none"
        MODALBG.style.display = "none"
    }, 100)
})
CLOSE.addEventListener("click", function () {
    MODAL.classList.remove("modal-active")
    CLOSE.classList.remove("close-active")
    MODALBG.classList.remove("modal-bg-active")
    setTimeout(function () {
        MODAL.style.display = "none"
        MODALBG.style.display = "none"
    }, 100)
})
