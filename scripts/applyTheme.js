import { getCurrentHour } from "./dateNTime.js";
let globalMode;
const chooseDefaultMode = () => {
    let currentHour = getCurrentHour();

    if (currentHour >= 6 && currentHour < 18) {
        return "light";
    } else {
        return "dark";
    }
};

const applyDefaultTheme = () => {
    let mode = chooseDefaultMode();
    console.log(mode);
    globalMode = mode;
    const pageElement = document.querySelector('.js-page');
    const modeButtonElement = document.querySelector('.js-mode-button');
    if (mode === 'light') {
        modeButtonElement.innerHTML = `
        <img src="./images/night-mode.png">
        `;
        pageElement.classList.add("page-bright-image");
    } else {
        modeButtonElement.innerHTML = `
        <img src="./images/brightness.png">
        `;
        pageElement.classList.add("page-dark-image");
    }

}

applyDefaultTheme();

export let applyTheme = () => {
    const pageElement = document.querySelector('.js-page');
    const modeButtonElement = document.querySelector('.js-mode-button');
    modeButtonElement.addEventListener('click', () => {
    if (globalMode === "light") {
        modeButtonElement.innerHTML = `
        <img src="./images/brightness.png">
        `;
        globalMode = "dark";
        pageElement.classList.remove("page-bright-image");
        pageElement.classList.add("page-dark-image");
    } else {
        modeButtonElement.innerHTML = `
        <img src="./images/night-mode.png">
        `;
        globalMode = "light";
        pageElement.classList.remove("page-dark-image");
        pageElement.classList.add("page-bright-image");
    }
}); 
}

