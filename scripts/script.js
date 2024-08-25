import { randomFact, todaysFact } from "./getFacts.js";
import { renderDateElement } from "./dateNTime.js";
import { applyTheme } from "./applyTheme.js";

todaysFact();
randomFact();
applyTheme();
renderDateElement();

const refreshButtonElement = document.querySelector('.js-refresh-button');
refreshButtonElement.addEventListener('click', () => {
    randomFact();
});

// Ensure today's fact content is set immediately
const todaysFactElement = document.querySelector('.js-todays-fact');
if (todaysFactElement) {
    todaysFactElement.innerHTML = todaysFact(); // Directly set the content
}

const randomFactElement = document.querySelector('.js-random-fact');
if (randomFactElement) {
    randomFactElement.innerHTML = randomFact(); // Directly set the content
}

// window.addEventListener('load', () => {
//     document.querySelector('p')
//         .classList.add('fade-in');
// });