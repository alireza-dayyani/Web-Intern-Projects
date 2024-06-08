"use strict"
const IMG = document.querySelector("img");
const ICON = document.querySelectorAll("i");
const SLIDES = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
let opacity = 100;
let counter = 0;
let fade;

ICON[0].addEventListener("click", function(){
    clearInterval(fade)
    fade = setInterval(function(){
        if(opacity<=0){
            clearInterval(fade)
            counter--;
            if(counter == -1){
                counter = 4
            }
            IMG.setAttribute("src",SLIDES[counter])
            fade = setInterval(function(){
                if(opacity>=100){
                    clearInterval(fade)
                }
                opacity++;
                IMG.style.opacity = `${opacity}%`
            })
        }
        opacity--;
        IMG.style.opacity = `${opacity}%`
    })
})

ICON[1].addEventListener("click", function () {
    clearInterval(fade)
    fade = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(fade)
            counter++;
            if (counter == 5) {
                counter = 0
            }
            IMG.setAttribute("src", SLIDES[counter])
            fade = setInterval(function(){
                if(opacity>=100){
                    clearInterval(fade)
                }
                opacity++;
                IMG.style.opacity=`${opacity}%`
            })
        }
        opacity--;
        IMG.style.opacity = `${opacity}%`;
    })
})