"use strict"
const VIDEO = document.querySelector("video");
const ACT = document.querySelectorAll(".actor");
const SLIDER = document.querySelectorAll("input");
const VOLCON = document.querySelector(".volume-range-container")
const VOL_ICN = document.querySelector(".volume-icon");
const SPEED = document.querySelectorAll(".speed-options");
const QUA = document.querySelectorAll(".quality-options");
const CLICK = document.querySelectorAll(".more-click");
const BAIT = document.querySelectorAll(".clickbait");
const BTITLE = document.querySelectorAll(".clickbait_title");
const MAIN_TITLE = document.querySelector("#video-title");
let time;
let play = false;
let mute = false;
let key;
let volume;

let src0 = "videos/2-1080p.mp4";
let src1 = "videos/3-1080p.mp4";
let src2 = "videos/4-1080p.mp4";

let bait0 = "images/2.jpg";
let bait1 = "images/3.jpg";
let bait2 = "images/4.jpg";

let title0 = "Raiders of the Lost Ark";
let title1 = "Annahilation";
let title2 = "Love, Death & Robots";

let pivot_title = "Solo Leveling";
let pivot_bait = "images/1.avif";
let pivot_src;


window.addEventListener("load", function () {
    SLIDER[0].setAttribute("max", VIDEO.duration);
});

document.addEventListener("keydown", function (x) {
    if (x.key == " ") {
        if (!play) {
            VIDEO.play();
            key = setInterval(function () {
                time = VIDEO.currentTime;
                SLIDER[0].setAttribute("value", time)
            }, 10);
            play = true;
        }
        else {
            VIDEO.pause();
            clearInterval(key);
            play = false;
        }
    }
    if (x.key == "ArrowLeft") {
        VIDEO.currentTime -= 5;
    }
    if (x.key == "ArrowRight") {
        VIDEO.currentTime += 5;
    }
    if (x.key == "ArrowUp" && VIDEO.volume < 1) {
        volume += 0.01;
        VIDEO.volume = volume;
        console.log("UP")
    }
    if (x.key == "ArrowDown" && VIDEO.volume > 0) {
        volume -= 0.01;
        VIDEO.volume = volume;
        console.log("DOWN")
    }
})
document.addEventListener("keydown", function (x) {
    if ((x.key == "m" || x.key == "M") && !mute) {
        volume = VIDEO.volume;
        VIDEO.volume = 0;
        VOL_ICN.setAttribute("class", "bi bi-volume-mute-fill volume-icon");
        mute = true;
    }
    else if ((x.key == "m" || x.key == "M") && mute) {
        VIDEO.volume = SLIDER[1].value;
        VOL_ICN.setAttribute("class", "bi bi-volume-up-fill volume-icon")
        mute = false;
    }
});

VOL_ICN.addEventListener("click", function () {
    VOLCON.classList.toggle("volume-slider-deactive")
    VOLCON.classList.toggle("volume-slider-active")
})

SLIDER[1].addEventListener("input", function () {
    if (!mute) {
        VIDEO.volume = SLIDER[1].value;
    }
})

SLIDER[0].addEventListener("input", function () {
    clearInterval(key);
    VIDEO.currentTime = SLIDER[0].value;
    SLIDER[0].setAttribute("value", VIDEO.currentTime);
    key = setInterval(function () {
        time = VIDEO.currentTime;
        SLIDER[0].setAttribute("value", time);
    }, 10);
});

ACT[0].addEventListener("click", function () {
    VIDEO.play();
    key = setInterval(function () {
        time = VIDEO.currentTime;
        SLIDER[0].setAttribute("value", time)
    }, 10)
    play = true;
});

ACT[1].addEventListener("click", function () {
    VIDEO.pause();
    clearInterval(key);
    play = false;
});
ACT[2].addEventListener("click", function () {
    VIDEO.pause();
    VIDEO.currentTime = 0
    clearInterval(key);
    SLIDER[0].setAttribute("value", "0")
    play = true;
});
ACT[3].addEventListener("click", function () {
    VIDEO.currentTime -= 5;
});
ACT[4].addEventListener("click", function () {
    VIDEO.currentTime += 5;
});
SPEED[0].addEventListener("click", function () {
    VIDEO.playbackRate = 0.5;
});
SPEED[1].addEventListener("click", function () {
    VIDEO.playbackRate = 0.75;
});
SPEED[2].addEventListener("click", function () {
    VIDEO.playbackRate = 1;
});
SPEED[3].addEventListener("click", function () {
    VIDEO.playbackRate = 1.25;
});
SPEED[4].addEventListener("click", function () {
    VIDEO.playbackRate = 1.5;
});

QUA[0].addEventListener("click", function () {
    time = VIDEO.currentTime;
    if (VIDEO.getAttribute("src") == "videos/1-720p.mp4" || VIDEO.getAttribute("src") == "videos/1-640p.mp4") {
        VIDEO.setAttribute("src", "videos/1-1080p.mp4");
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/2-720p.mp4" || VIDEO.getAttribute("src") == "videos/2-640p.mp4") {
        VIDEO.setAttribute("src", "videos/2-1080p.mp4")
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/3-720p.mp4" || VIDEO.getAttribute("src") == "videos/3-640p.mp4") {
        VIDEO.setAttribute("src", "videos/3-1080p.mp4")
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/4-720p.mp4" || VIDEO.getAttribute("src") == "videos/4-640p.mp4") {
        VIDEO.setAttribute("src", "videos/4-1080p.mp4")
        VIDEO.currentTime = time;
    }

});
QUA[1].addEventListener("click", function () {
    time = VIDEO.currentTime;
    if (VIDEO.getAttribute("src") == "videos/1-1080p.mp4" || VIDEO.getAttribute("src") == "videos/1-640p.mp4") {
        VIDEO.setAttribute("src", "videos/1-720p.mp4")
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/2-1080p.mp4" || VIDEO.getAttribute("src") == "videos/2-640p.mp4") {
        VIDEO.setAttribute("src", "videos/2-720p.mp4")
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/3-1080p.mp4" || VIDEO.getAttribute("src") == "videos/3-640p.mp4") {
        VIDEO.setAttribute("src", "videos/3-720p.mp4")
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/4-1080p.mp4" || VIDEO.getAttribute("src") == "videos/4-640p.mp4") {
        VIDEO.setAttribute("src", "videos/4-720p.mp4")
        VIDEO.currentTime = time;
    }
});
QUA[2].addEventListener("click", function () {
    time = VIDEO.currentTime;
    if (VIDEO.getAttribute("src") == "videos/1-1080p.mp4" || VIDEO.getAttribute("src") == "videos/1-720p.mp4") {
        VIDEO.setAttribute("src", "videos/1-640p.mp4");
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/2-1080p.mp4" || VIDEO.getAttribute("src") == "videos/2-720p.mp4") {
        VIDEO.setAttribute("src", "videos/2-640p.mp4");
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/3-1080p.mp4" || VIDEO.getAttribute("src") == "videos/3-720p.mp4") {
        VIDEO.setAttribute("src", "videos/3-640p.mp4");
        VIDEO.currentTime = time;
    }
    else if (VIDEO.getAttribute("src") == "videos/4-1080p.mp4" || VIDEO.getAttribute("src") == "videos/4-720p.mp4") {
        VIDEO.setAttribute("src", "videos/4-640p.mp4");
        VIDEO.currentTime = time;
    }
});

CLICK[0].addEventListener("click", function () {
    pivot_src = VIDEO.getAttribute("src");
    VIDEO.setAttribute("src", src0);
    src0 = pivot_src;

    bait0 = pivot_bait;
    pivot_bait = BAIT[0].getAttribute("src");
    BAIT[0].setAttribute("src", bait0);
    bait0 = pivot_bait;

    title0 = pivot_title;
    pivot_title = BTITLE[0].textContent;
    BTITLE[0].textContent = title0;
    title0 = pivot_title;
    console.log(pivot_title)
    MAIN_TITLE.textContent = `Video Source : ${pivot_title}`;
});
CLICK[1].addEventListener("click", function () {
    pivot_src = VIDEO.getAttribute("src");
    VIDEO.setAttribute("src", src1);
    src1 = pivot_src;

    bait1 = pivot_bait;
    pivot_bait = BAIT[1].getAttribute("src");
    BAIT[1].setAttribute("src", bait1);
    bait1 = pivot_bait;

    title1 = pivot_title;
    pivot_title = BTITLE[1].textContent;
    BTITLE[1].textContent = title1;
    title1 = pivot_title;
    console.log(pivot_title)
    MAIN_TITLE.textContent = `Video Source : ${pivot_title}`;
});
CLICK[2].addEventListener("click", function () {
    pivot_src = VIDEO.getAttribute("src");
    VIDEO.setAttribute("src", src2);
    src2 = pivot_src;

    bait2 = pivot_bait;
    pivot_bait = BAIT[2].getAttribute("src");
    BAIT[2].setAttribute("src", bait2);
    bait2 = pivot_bait;

    title2 = pivot_title;
    pivot_title = BTITLE[2].textContent;
    BTITLE[2].textContent = title2;
    title2 = pivot_title;
    console.log(pivot_title)
    MAIN_TITLE.textContent = `Video Source : ${pivot_title}`;
});

// function volume_icon_handler(volume) {
//     if (volume <= 1 && volume > 0.5) {
//         VOL_ICN.setAttribute("class", "bi bi-volume-mute-fill volume-icon");
//     }
//     else if (volume > 0 && volume <= 0.5) {
//         VOL_ICN.setAttribute("class", "bi bi-volume-down-fill volume-icon");
//     }
//     else {
//         VOL_ICN.setAttribute("class", "bi bi-volume-off-fill volume-icon");
//     }
// };