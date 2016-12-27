const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if (seconds == 59) {
        secondsHand.style.transition = 'none';
    } else if (seconds == 1) {
        secondsHand.style.transition = 'all 0.5s';
    }
}

setInterval(setDate, 1000)
setDate();