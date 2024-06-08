"use strict"
const BTN = document.querySelectorAll("button")
const INPUT = document.querySelector("input")

BTN[0].addEventListener("click",function(){INPUT.type="text"})
BTN[1].addEventListener("click",function(){INPUT.type="password"})