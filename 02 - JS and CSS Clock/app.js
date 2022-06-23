const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    secondHand.style.transform = `rotate(${90+(seconds*6)}deg)`;
    minuteHand.style.transform = `rotate(${90+(minutes*6)}deg)`;
    hourHand.style.transform = `rotate(${90+(hours*6)}deg)`;
    console.log(now)
}

setInterval(setDate, 1000);