let userScr = [];
let compScr = [];
let level = 0;
let started = 0;
let color = ["green", "red", "yellow", "blue"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == 0) {
        console.log("Game Started");
        started = 1;
    }
    levelup();
});
function flashBtn(box1) {
    box1.classList.add("flash");
    setTimeout(function () {
        box1.classList.remove("flash");
    }, 300);
}
function userFlash(box1) {
    box1.classList.add("userflash");
    setTimeout(function () {
        box1.classList.remove("userflash");
    }, 300);
}

function checkAns(idx) {

    if (userScr[idx] == compScr[idx]) {
        if (userScr.length == compScr.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over, Your Score is <b>${level}</b> <br> You clicked wrong button. Try Again..!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "black";
        }, 200);
        reset();
    }
}
function levelup() {
    userScr = [];
    let au = ++level;
    h2.innerText = `level ${au}`;
    let rndIdx = Math.floor(Math.random() * 3);
    let rndColor = color[rndIdx];
    compScr.push(rndColor);
    console.log(compScr);
    let rndBtn = document.querySelector(`.${rndColor}`);
    flashBtn(rndBtn);
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userScr.push(userColor);
    console.log(userScr);
    checkAns(userScr.length - 1);
}
let allBtns = document.querySelectorAll(".box");
for (btns of allBtns) {
    btns.addEventListener("click", btnPress);
}
function reset() {
    started = 0;
    compScr = [];
    userScr = [];
    level = 0;
}