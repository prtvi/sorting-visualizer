"use strict";

const barContainer = document.getElementById("bar-container");
const newArrayBtn = document.getElementById("btn-new-arr");
const arrSizeSlider = document.querySelector("#arr-size-slider");
const delaySlider = document.querySelector("#delay-slider");

// variables
let bars = [];

// runtime bar colors
// {operation}{color}
const defaultBarColor = "#bbb";
const traverseRed = "#ff0000";
const swappingBlue = "#0000ff";
const atRightPosGreen = "#00ff00";

// delay in seconds
let delay = 0.1;

// Bars
const maxBarHeight = 450;
const minBarHeight = 10;

const setup = function (barCount) {
  const barWidth = 5;

  barContainer.innerHTML = "";

  // const width = window.innerWidth;

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

// const onResize = function () {
//   window.location.href = window.location.href;
// };

const enableBtns = function (enable, exceptBtnWithId) {
  const btns = document.querySelectorAll(".btn");
  const clickedBtn = document.getElementById(exceptBtnWithId);

  if (enable) {
    btns.forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove("btn-disabled");
    });

    clickedBtn.classList.remove("btn-clicked");
  } else {
    btns.forEach((btn) => {
      btn.disabled = true;
      btn.classList.add("btn-disabled");
    });

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

newArrayBtn.addEventListener("click", setup);

// window.addEventListener("resize", onResize);

setup(60);

arrSizeSlider.addEventListener("change", () => setup(arrSizeSlider.value));

delaySlider.addEventListener("change", () => (delay = delaySlider.value));
