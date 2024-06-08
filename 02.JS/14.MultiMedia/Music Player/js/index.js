const AUDIO = document.querySelector("audio")
const PLAYLIST_ITEM = document.querySelectorAll(".playlist-item")
const PLAYLIST_TITLE = document.querySelectorAll(".playlist-title")
const ACT = document.querySelectorAll("i")
const SLIDER = document.querySelectorAll("input")
const NOWPLAYING = document.querySelector("#nowplaying-title")

let key;
let play = false;

let src = ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3", "audio/4.mp3", "audio/5.mp3"];
let pivot_src;

let title = ["Samaa", "Persian Carpet", "Giorno's Theme", "Ravus Aeterna"];
let pivot_title = "TVA";

window.addEventListener("load", function () {
    SLIDER[0].setAttribute("max", AUDIO.duration)
})
window.addEventListener("keydown", function (x) {
    if (x.key == " " && !play) {
        AUDIO.play();
        key = setInterval(function () {
            SLIDER[0].setAttribute("value", AUDIO.currentTime)
        }, 10)
        play = true;
    }
    else if (x.key == " " && play) {
        clearInterval(key)
        AUDIO.pause();
        play = false;
    }
})

// SLIDER[0].addEventListener("input", function () {
//     clearInterval(key);
//     AUDIO.currentTime = SLIDER[0].value;
//     SLIDER[0].setAttribute("value" = AUDIO.currentTime);
//     key = setInterval(function () {
//         SLIDER.setAttribute("value", AUDIO.currentTime)
//     }, 10)
// })

ACT[0].addEventListener("click", function () {
    clearInterval(key)
    AUDIO.currentTime = 0;
    SLIDER[0].value = AUDIO.currentTime
    AUDIO.pause();
})

ACT[1].addEventListener("click", function () {
    clearInterval(key)
    AUDIO.pause();
})

ACT[2].addEventListener("click", function () {
    AUDIO.play();
    key = setInterval(function () {
        SLIDER[0].setAttribute("value", AUDIO.currentTime)
    }, 10)
})

ACT[3].addEventListener("click", function () {
    AUDIO.currentTime -= 5;
})

ACT[4].addEventListener("click", function () {
    AUDIO.currentTime += 5;
})

SLIDER[1].addEventListener("input", function () {
    AUDIO.volume = SLIDER[1].value;
})

PLAYLIST_ITEM[0].addEventListener("click", function () {
    pivot_src = AUDIO.getAttribute("src");
    AUDIO.setAttribute("src", src[1]);
    src[1] = pivot_src;

    title[0] = pivot_title;
    pivot_title = PLAYLIST_TITLE[0].textContent;
    PLAYLIST_TITLE[0].textContent = title[0];
    NOWPLAYING.innerHTML = `NOW PLAYING &#119072; : ${pivot_title}`;
})

PLAYLIST_ITEM[1].addEventListener("click", function () {
    pivot_src = AUDIO.getAttribute("src");
    AUDIO.setAttribute("src", src[2]);
    src[2] = pivot_src;

    title[1] = pivot_title;
    pivot_title = PLAYLIST_TITLE[1].textContent;
    PLAYLIST_TITLE[1].textContent = title[1];
    NOWPLAYING.innerHTML = `NOW PLAYING &#119072; : ${pivot_title}`;
})

PLAYLIST_ITEM[2].addEventListener("click", function () {
    pivot_src = AUDIO.getAttribute("src");
    AUDIO.setAttribute("src", src[3]);
    src[3] = pivot_src;

    title[2] = pivot_title;
    pivot_title = PLAYLIST_TITLE[2].textContent;
    PLAYLIST_TITLE[2].textContent = title[2];
    NOWPLAYING.innerHTML = `NOW PLAYING &#119072; : ${pivot_title}`;
})

PLAYLIST_ITEM[3].addEventListener("click", function () {
    pivot_src = AUDIO.getAttribute("src");
    AUDIO.setAttribute("src", src[4]);
    src[4] = pivot_src;

    title[3] = pivot_title;
    pivot_title = PLAYLIST_TITLE[3].textContent;
    PLAYLIST_TITLE[3].textContent = title[3];
    NOWPLAYING.innerHTML = `NOW PLAYING &#119072; : ${pivot_title}`;
})