import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let getDate = () => {
    return {
        'date': dayjs().format('YYYY-MM-DD'),
        'time': dayjs().format('HH:mm:ss')
    }
};


export const getCurrentHour = () => {
    return dayjs().hour();
};

export const renderDateElement = () => {
    const dateElement = document.querySelector('.js-dateNtime');
    if (dateElement) {
        // Initialize date and time immediately
        const initialDate= getDate();
        // if we don't do this the page will wait 1s before updating date and time as we have set Interval. Thus the div will be empty for 1seconds.
        dateElement.innerHTML = `<p>Time: ${initialDate.time} <br> Date: ${initialDate.date}</p>`;
        dateElement.style.animation = "none";
        setInterval(() => {
            dateElement.innerHTML = `<p>
            Time: ${getDate().time} <br> Date: ${getDate().date}
            </p>
            `;
        }, 1000);
}
}

