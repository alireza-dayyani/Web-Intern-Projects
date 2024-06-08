"use strict"
const BTN = document.querySelectorAll("button")
const PARAGRAPH = document.querySelector("p")

let textsize = parseInt(PARAGRAPH.style.fontSize)

BTN[0].addEventListener("click",function(){
    textsize ++;
    PARAGRAPH.style.fontSize = textsize + "px"
})

BTN[1].addEventListener("click",function(){
    textsize --;
    PARAGRAPH.style.fontSize = textsize + "px"
})