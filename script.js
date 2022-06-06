const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    [secondHand, minuteHand, hourHand].forEach(el => el.style.transition = (seconds === 0) ? 'none' : null );
}

// [secondHand, minutesHand, hourHand].forEach(el => el.style.transition = (seconds === 0) ? 'none' : null );
setInterval(setDate, 1000);
setDate();