const selectionSort = async function () {
  console.log("Clicked selection sort button");

  if (bars.length === 0) return;

  enableBtns(false, "btn-selection-sort");

  for (let i = 0; i < bars.length - 1; i++) {
    let minIndex = i;
    bars[i].style.background = swappingBlue;

    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = traverseRed;

      await wait(delay);

      if (bars[j].offsetHeight < bars[minIndex].offsetHeight) {
        bars[j].style.background = swappingBlue;

        if (minIndex !== i) bars[minIndex].style.background = defaultBarColor;

        minIndex = j;
      } else {
        bars[j].style.background = defaultBarColor;
      }
    }

    await wait(delay);

    swap(bars[i], bars[minIndex]);

    bars[minIndex].style.background = defaultBarColor;
    bars[i].style.background = atRightPosGreen;
  }

  bars[bars.length - 1].style.background = atRightPosGreen;

  enableBtns(true, "btn-selection-sort");
};

const selectionSortBtn = document.getElementById("btn-selection-sort");
selectionSortBtn.addEventListener("click", selectionSort);
