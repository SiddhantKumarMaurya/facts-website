import { randomFact, todaysFact } from "./getFacts.js";
import { date } from "./dateNTime.js";

todaysFact();
randomFact();
let mode = "light";
const pageElement = document.querySelector('.js-page');
const modeButtonElement = document.querySelector('.js-mode-button');
modeButtonElement.addEventListener('click', () => {
    if (mode === "light") {
        modeButtonElement.innerHTML = `
        <img src="./images/brightness.png">
        `;
        mode = "dark";
        pageElement.classList.remove("page-bright-image");
        pageElement.classList.add("page-dark-image");
    } else {
        modeButtonElement.innerHTML = `
        <img src="./images/night-mode.png">
        `;
        mode = "light";
        pageElement.classList.remove("page-dark-image");
        pageElement.classList.add("page-bright-image");
    }
}); 

const refreshButtonElement = document.querySelector('.js-refresh-button');
refreshButtonElement.addEventListener('click', () => {
    randomFact();
});

const dateElement = document.querySelector('.js-dateNtime');
if (dateElement) {
    setInterval(() => {
        dateElement.innerHTML = `
        Time: ${date().time} <br> Date: ${date().date}
        `;
    }, 1000);
}
