const LOADER = document.querySelector(".preloader");

window.addEventListener("load", function() {
    LOADER.style.display = "none";
    document.querySelector(".content").style.display = "block";
});