export let stitchCounter = JSON.parse(localStorage.getItem("stitchCounter"));
checkCounterValue(stitchCounter);

export let currentStitch = JSON.parse(localStorage.getItem("currentStitch"));
checkCounterValue(currentStitch);

export function setStitchCounter(value) {
  stitchCounter = value;
  saveCounterToLocalStorage("stitchCounter");
  console.log(stitchCounter);
}

function saveCounterToLocalStorage(value) {
  localStorage.setItem(value, JSON.stringify(stitchCounter));
}

function checkCounterValue(stitch) {
  if (!stitch) {
    stitch = 0;
  }
}

export function resetStitchCounter() {
  stitchCounter = 0;
  saveCounterToLocalStorage("stitchCounter");
  saveCounterToLocalStorage("currentStitch");
}