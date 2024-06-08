const MENU_ICON = document.querySelector(".menu-icon")
const NAV = document.querySelector(".navigation")
const MENU = document.querySelector(".menu")
const SUBMENU = document.querySelectorAll(".submenu")
const SUBICON = document.querySelectorAll(".submenu-icon")
const BACK = document.querySelectorAll(".backtomenu")
const BTN = document.querySelector("button")
const CON = document.querySelector(".placeholder")

window.addEventListener("scroll",function(){
    if(this.scrollY>100){
        NAV.classList.remove("blackbg")
        NAV.classList.add("navybg")
    }
})

MENU_ICON.addEventListener("click", function () {
    MENU_ICON.classList.toggle("rotate");
    NAV.classList.toggle("show-navigation");
    MENU.classList.toggle("show-menu");
})

SUBICON[0].addEventListener("click", function () {
    SUBMENU[0].classList.add("show-submenu")
    SUBMENU[0].classList.remove("display-none")
})
SUBICON[1].addEventListener("click", function () {
    SUBMENU[1].classList.add("show-submenu")
    SUBMENU[1].classList.remove("display-none")
})
SUBICON[2].addEventListener("click", function () {
    SUBMENU[2].classList.add("show-submenu")
    SUBMENU[2].classList.remove("display-none")
})
SUBICON[3].addEventListener("click", function () {
    SUBMENU[3].classList.add("show-submenu")
    SUBMENU[3].classList.remove("display-none")
})

BACK[0].addEventListener("click",function(){
    SUBMENU[0].classList.remove("show-submenu")
    SUBMENU[0].classList.add("display-none")
})
BACK[1].addEventListener("click",function(){
    SUBMENU[1].classList.remove("show-submenu")
    SUBMENU[1].classList.add("display-none")
})
BACK[2].addEventListener("click",function(){
    SUBMENU[2].classList.remove("show-submenu")
    SUBMENU[2].classList.add("display-none")
})
BACK[3].addEventListener("click",function(){
    SUBMENU[3].classList.remove("show-submenu")
    SUBMENU[3].classList.add("display-none")
})

BTN.addEventListener("click",function(){
    CON.classList.toggle("display-none")
})