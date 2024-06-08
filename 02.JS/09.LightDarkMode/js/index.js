const BTNCON = document.querySelector(".button-container")
const BTN = document.querySelector(".button")
const STYLESHEET = document.querySelectorAll("link")
const ICON = document.querySelector("i")

BTNCON.addEventListener("click", function () {
    if (BTN.classList.contains("left")) {
        BTN.classList.replace("left", "right")
        STYLESHEET[1].setAttribute("href", "css/index-dark.css")
        ICON.setAttribute("class","bi bi-moon-stars icon")
    }
    else {
        BTN.classList.replace("right", "left")
        STYLESHEET[1].setAttribute("href", "css/index-light.css")
        ICON.setAttribute("class","bi bi-brightness-high icon")
    }
})