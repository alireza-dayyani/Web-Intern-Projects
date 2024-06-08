"use strict";
const INPUT = document.querySelector("input");
const BAR = document.querySelector(".strength-check");
const ICON = document.querySelector("i");
const REP = document.querySelector("label");
let password;
let zero = "0";
let nine = "9";
let sa = "a";
let sz = "z";
let ca = "A";
let cz = "Z";


ICON.addEventListener("click", function () {
    if (INPUT.getAttribute("type") == "password") {
        INPUT.setAttribute("type", "text");
        ICON.setAttribute("class", "bi bi-eye-fill");
    } else {
        INPUT.setAttribute("type", "password");
        ICON.setAttribute("class", "bi bi-eye-slash-fill");
    }
});

INPUT.addEventListener("input", function () {
    password = INPUT.value;
    let counter = 0;
    let num_check = false;
    let small_check = false;
    let cap_check = false;
    let sym_check = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() >= zero.charCodeAt() && password[i].charCodeAt() <= nine.charCodeAt()) {
            if (num_check == false) {
                counter++;
                num_check = true;
            }
        }
        else if (password[i].charCodeAt() >= sa.charCodeAt() && password[i].charCodeAt() <= sz.charCodeAt()) {
            if (small_check == false) {
                counter++;
                small_check = true;
            }
        }
        else if (password[i].charCodeAt() >= ca.charCodeAt() && password[i].charCodeAt() <= cz.charCodeAt()) {
            if (cap_check == false) {
                counter++;
                cap_check = true;
            }
        }
        else {
            if (sym_check == false) {
                counter++;
                sym_check = true;
            }
        }
    }

    switch (counter) {
        case 0:
            BAR.setAttribute("class", "strength-check");
            REP.textContent = "Enter a password to check it's strength";
            break;
        case 1:
            BAR.setAttribute("class", "strength-check progress-25");
            REP.textContent = "Weak!";
            break;
        case 2:
            BAR.setAttribute("class", "strength-check progress-50");
            REP.textContent = "Not Bad!";
            break;
        case 3:
            BAR.setAttribute("class", "strength-check progress-75");
            REP.textContent = "Good!";
            break;
        case 4:
            BAR.setAttribute("class", "strength-check progress-100");
            REP.textContent = "Excellent!";
            break;
        default:
            break;
    }
});