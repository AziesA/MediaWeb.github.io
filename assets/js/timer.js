let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let indicator = document.querySelector(".indicator");

let play = document.getElementById("start");

let counter = -1;
let pomoValue = 30 * 60;
let counterValue = pomoValue;
// let restValue = 300000;
play.addEventListener("click", () => {
    if (counter == -1 && counterValue > 0) {
        counter = setInterval(() => {
            let rest = --counterValue;
            let min = Math.floor(rest / 60);
            let sec = Math.floor(rest % 60);
            seconds.textContent = sec.toString().padStart(2, "0");
            minutes.textContent = min.toString().padStart(2, "0");
            indicator.style.strokeDashoffset = 600 - (rest / pomoValue) * 600;

            if (rest == 0) {
                clearInterval(counter);
            }
            console.log(min, sec, rest);
        }, 1000);
    }
});

