"use strict"
const BTN = document.querySelectorAll("button")
const INPUT = document.querySelectorAll("input")

BTN[0].addEventListener("click",function(){
    let password = INPUT[0].value;
    INPUT[0].style.display="none";
    INPUT[1].style.display="block";
    INPUT[1].value = password;
})

BTN[1].addEventListener("click",function(){
    INPUT[1].style.display="none"
    INPUT[0].style.display="block"
})