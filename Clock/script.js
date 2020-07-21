setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
var currentDate = new Date();
var secondsRatio = currentDate.getSeconds() / 60;
var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

function setClock() {
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}


function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
