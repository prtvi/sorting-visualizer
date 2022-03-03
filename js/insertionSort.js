const insertionSort = async function () {
  console.log("Clicked insertion sort button");

  if (bars.length === 0) return;

  enableBtns(false, "btn-insertion-sort");

  bars[0].style.background = atRightPosGreen;

  for (let i = 1; i < bars.length; i++) {
    const currentHeight = bars[i].style.height;

    bars[i].style.background = swappingBlue;
    let j = i - 1;

    await wait(delay);

    while (j >= 0 && parseInt(currentHeight) < parseInt(bars[j].style.height)) {
      bars[j].style.background = swappingBlue;

      // shift
      bars[j + 1].style.height = bars[j].style.height;
      j--;

      await wait(delay);

      for (let k = i; k >= 0; k--) bars[k].style.background = atRightPosGreen;
    }

    bars[j + 1].style.height = currentHeight;
    bars[i].style.background = atRightPosGreen;
  }

  enableBtns(true, "btn-insertion-sort");
};

const insertionSortBtn = document.getElementById("btn-insertion-sort");
insertionSortBtn.addEventListener("click", insertionSort);
