"use strict"
const BTN = document.querySelectorAll("button")
const PARAGRAPH = document.querySelector("p")
const COMSTYLE = window.getComputedStyle(PARAGRAPH)
let textsize = parseInt(COMSTYLE.getPropertyValue("font-size"))
console.log(textsize)

BTN[0].addEventListener("click",function(){
    textsize += 1
    PARAGRAPH.style.fontSize = textsize + "px"
})

BTN[1].addEventListener("click",function(){
    textsize -= 1
    PARAGRAPH.style.fontSize = textsize + "px"
})