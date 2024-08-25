export let randomFact = async function () {
    const nextResponse = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
        method: 'GET',
        header: {
            "Accept": 'application/json'
        }
    })
    const nextText = await nextResponse.json();
    document.querySelector(".js-random-fact").innerHTML = `${nextText.text} kasfjksdfasjdfkajsdkjfkjaskdjfkjkasdjkfjkasjdkfjklasjkdfjasdjkfjkajsdkfjkjaskdjfkjaksjdkfjkasjdkfkasjdkfjkajdjfjaskdjfkjadjkfjkajkdfjkaskfdjaksjfkdjksjdkfjkasdkfj`
}

export let todaysFact = async function () {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today', {
        method: 'GET',
        header: {
            "Accept": 'application/json'
        }
    }
    );
    const text = await response.json();
    document.querySelector(".js-todays-fact").innerHTML = `${text.text}`;
}

