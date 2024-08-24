import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export let date = () => {
    return {
        'date': dayjs().format('YYYY-MM-DD'),
        'time': dayjs().format('HH:mm:ss')
    }
};


