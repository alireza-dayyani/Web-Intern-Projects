"use strict"
const HOURHAND = document.querySelector("#hour")
const MINHAND = document.querySelector("#minute")
const SECHAND = document.querySelector("#second")

function show_time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    HOURHAND.style.transform = `rotate(${hour * 30}deg)`
    MINHAND.style.transform = `rotate(${minute * 6}deg)`
    SECHAND.style.transform = `rotate(${second * 6}deg)`
}

window.addEventListener("load", show_time);
setInterval(show_time, 1000)
