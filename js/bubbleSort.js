const bubbleSort = async function () {
  // console.log("Begin bubble sort");

  if (bars.length === 0 || sorted) return;

  enableBtns(false, "btn-bubble-sort");

  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (bars[j].offsetHeight > bars[j + 1].offsetHeight) {
        bars[j].style.background = swappingBlue;
        bars[j + 1].style.background = swappingBlue;

        await wait(delay);

        swap(bars[j], bars[j + 1]);

        bars[j].style.background = defaultBarColor;
        bars[j + 1].style.background = defaultBarColor;
      }
    }
    bars[bars.length - 1 - i].style.background = atRightPosGreen;
  }

  enableBtns(true, "btn-bubble-sort");
  sorted = true;

  // console.log("End bubble sort");
};

const bubbleSortBtn = document.getElementById("btn-bubble-sort");
bubbleSortBtn.addEventListener("click", bubbleSort);
