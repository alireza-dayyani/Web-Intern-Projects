"use strcit"
const ITEM = document.querySelectorAll(".acc-item")
const CONTENT = document.querySelectorAll(".content")
const ICON = document.querySelectorAll("i")

ITEM[0].addEventListener("click", function () {
    if (CONTENT[1].classList.contains("acc-toggle")) {
        CONTENT[1].classList.remove("acc-toggle")
    }
    else if (CONTENT[2].classList.contains("acc-toggle")) {
        CONTENT[2].classList.remove("acc-toggle")
    }
    else if (CONTENT[3].classList.contains("acc-toggle")) {
        CONTENT[3].classList.remove("acc-toggle")
    }
    if (ITEM[1].classList.contains("picked-item")) {
        ITEM[1].classList.remove("picked-item")
    }
    else if (ITEM[2].classList.contains("picked-item")) {
        ITEM[2].classList.remove("picked-item")
    }
    else if (ITEM[3].classList.contains("picked-item")) {
        ITEM[3].classList.remove("picked-item")
    }
    if (ICON[1].classList.contains("picked-icon")) {
        ICON[1].classList.remove("picked-icon")
    }
    else if (ICON[2].classList.contains("picked-icon")) {
        ICON[2].classList.remove("picked-icon")
    }
    else if (ICON[3].classList.contains("picked-icon")) {
        ICON[3].classList.remove("picked-icon")
    }
    ITEM[0].classList.toggle("picked-item")
    CONTENT[0].classList.toggle("acc-toggle")
    ICON[0].classList.toggle("picked-icon")
})
ITEM[1].addEventListener("click", function () {
    if (CONTENT[0].classList.contains("acc-toggle")) {
        CONTENT[0].classList.remove("acc-toggle")
    }
    else if (CONTENT[2].classList.contains("acc-toggle")) {
        CONTENT[2].classList.remove("acc-toggle")
    }
    else if (CONTENT[3].classList.contains("acc-toggle")) {
        CONTENT[3].classList.remove("acc-toggle")
    }
    if (ITEM[0].classList.contains("picked-item")) {
        ITEM[0].classList.remove("picked-item")
    }
    else if (ITEM[2].classList.contains("picked-item")) {
        ITEM[2].classList.remove("picked-item")
    }
    else if (ITEM[3].classList.contains("picked-item")) {
        ITEM[3].classList.remove("picked-item")
    }
    if (ICON[0].classList.contains("picked-icon")) {
        ICON[0].classList.remove("picked-icon")
    }
    else if (ICON[2].classList.contains("picked-icon")) {
        ICON[2].classList.remove("picked-icon")
    }
    else if (ICON[3].classList.contains("picked-icon")) {
        ICON[3].classList.remove("picked-icon")
    }
    ITEM[1].classList.toggle("picked-item")
    CONTENT[1].classList.toggle("acc-toggle")
    ICON[1].classList.toggle("picked-icon")
})
ITEM[2].addEventListener("click", function () {
    if (CONTENT[0].classList.contains("acc-toggle")) {
        CONTENT[0].classList.remove("acc-toggle")
    }
    else if (CONTENT[1].classList.contains("acc-toggle")) {
        CONTENT[1].classList.remove("acc-toggle")
    }
    else if (CONTENT[3].classList.contains("acc-toggle")) {
        CONTENT[3].classList.remove("acc-toggle")
    }
    if (ITEM[0].classList.contains("picked-item")) {
        ITEM[0].classList.remove("picked-item")
    }
    else if (ITEM[1].classList.contains("picked-item")) {
        ITEM[1].classList.remove("picked-item")
    }
    else if (ITEM[3].classList.contains("picked-item")) {
        ITEM[3].classList.remove("picked-item")
    }
    if (ICON[0].classList.contains("picked-icon")) {
        ICON[0].classList.remove("picked-icon")
    }
    else if (ICON[1].classList.contains("picked-icon")) {
        ICON[1].classList.remove("picked-icon")
    }
    else if (ICON[3].classList.contains("picked-icon")) {
        ICON[3].classList.remove("picked-icon")
    }
    ITEM[2].classList.toggle("picked-item")
    CONTENT[2].classList.toggle("acc-toggle")
    ICON[2].classList.toggle("picked-icon")
})
ITEM[3].addEventListener("click", function () {
    if (CONTENT[0].classList.contains("acc-toggle")) {
        CONTENT[0].classList.remove("acc-toggle")
    }
    else if (CONTENT[1].classList.contains("acc-toggle")) {
        CONTENT[1].classList.remove("acc-toggle")
    }
    else if (CONTENT[2].classList.contains("acc-toggle")) {
        CONTENT[2].classList.remove("acc-toggle")
    }
    if (ITEM[0].classList.contains("picked-item")) {
        ITEM[0].classList.remove("picked-item")
    }
    else if (ITEM[1].classList.contains("picked-item")) {
        ITEM[1].classList.remove("picked-item")
    }
    else if (ITEM[2].classList.contains("picked-item")) {
        ITEM[2].classList.remove("picked-item")
    }
    if (ICON[0].classList.contains("picked-icon")) {
        ICON[0].classList.remove("picked-icon")
    }
    else if (ICON[1].classList.contains("picked-icon")) {
        ICON[1].classList.remove("picked-icon")
    }
    else if (ICON[2].classList.contains("picked-icon")) {
        ICON[2].classList.remove("picked-icon")
    }
    ITEM[3].classList.toggle("picked-item")
    CONTENT[3].classList.toggle("acc-toggle")
    ICON[3].classList.toggle("picked-icon")
})