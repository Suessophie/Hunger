'use strict';

let min = '13';
let sec = '59';

const id = setInterval(timer, 1000);

function timer() {
  if (+min === 0 && +sec === 0) {
    clearInterval(id);

    return;
  }

  if (sec === '00') {
    min -= 1;
    sec = '59';
  } else {
    sec -= 1;
  }

  const time = document.getElementById('time');

  if (sec !== Number(sec).toString() && +sec < 10) {
    sec = '0' + sec;
  }

  const currentTimeLeft = `${min}:${sec}`;

  time.innerHTML = currentTimeLeft;
};

const button1 = document.getElementById('0');
const button2 = document.getElementById('1');
const button3 = document.getElementById('2');
const buttons = document.getElementsByClassName('slider__button');
const slides = document.getElementsByClassName('slide');

button1.onclick = function showSlide() {
  for (let i = 0; i < 3; i++) {
    buttons[i].className = 'slider__button';
    slides[i].style.display = 'none';
  }

  buttons[0].className = 'slider__button slider__button--active';
  slides[0].style.display = 'flex';
};

button2.onclick = function showSlide() {
  for (let i = 0; i < 3; i++) {
    buttons[i].className = 'slider__button';
    slides[i].style.display = 'none';
  }

  buttons[1].className = 'slider__button slider__button--active';
  slides[1].style.display = 'flex';
};

button3.onclick = function showSlide() {
  for (let i = 0; i < 3; i++) {
    buttons[i].className = 'slider__button';
    slides[i].style.display = 'none';
  }

  buttons[2].className = 'slider__button slider__button--active';
  slides[2].style.display = 'flex';
};
