"use strict";

const barContainer = document.getElementById("bar-container");
const newArrayBtn = document.getElementById("btn-new-arr");
const arrSizeSlider = document.querySelector("#arr-size-slider");
const delaySlider = document.querySelector("#delay-slider");

let bars = [];
let sorted = false;

// runtime bar colors
// {operation}{color}
const defaultBarColor = "#bbb";
const swappingBlue = "#0000ff";
const traverseRed = "#ff0000";
const atRightPosGreen = "#00ff00";

// delay in seconds
let delay = 0.1;

// Bars
const defaultArrSize = 70;
const maxBarHeight = 450;
const minBarHeight = 10;
const barWidth = 5;

const setup = function (barCount) {
  sorted = false;
  barContainer.innerHTML = "";

  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement("div");

    bar.style.height = `${Math.floor(
      Math.random() * maxBarHeight + minBarHeight
    )}px`;

    bar.style.width = `${barWidth}px`;

    bar.classList.add("bar");
    barContainer.appendChild(bar);
  }

  bars = Array.from(barContainer.children);
};

const enableBtns = function (enable, exceptBtnWithId) {
  const btns = document.querySelectorAll(".btn");
  const clickedBtn = document.getElementById(exceptBtnWithId);

  if (enable) {
    btns.forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove("btn-disabled");
    });

    arrSizeSlider.disabled = false;
    clickedBtn.classList.remove("btn-clicked");
  } else {
    btns.forEach((btn) => {
      btn.disabled = true;
      btn.classList.add("btn-disabled");
    });

    arrSizeSlider.disabled = true;
    clickedBtn.classList.remove("btn-disabled");
    clickedBtn.classList.add("btn-clicked");
  }
};

const swap = function (el1, el2) {
  const transform1 = window.getComputedStyle(el1).getPropertyValue("height");
  const transform2 = window.getComputedStyle(el2).getPropertyValue("height");

  [el1.style.height, el2.style.height] = [transform2, transform1];
};

const wait = function (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

// EVENT LISTENERS

newArrayBtn.addEventListener("click", () => setup(arrSizeSlider.value));

arrSizeSlider.addEventListener("change", () => setup(arrSizeSlider.value));

delaySlider.addEventListener("change", () => (delay = delaySlider.value));

// main
setup(defaultArrSize);
