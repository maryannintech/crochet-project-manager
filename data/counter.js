export let stitches = JSON.parse(localStorage.getItem("stitchCounter"));
checkCounterValue(stitches);

export let currentStitch = JSON.parse(localStorage.getItem("currentStitch"));
checkCounterValue(currentStitch);

export function setStitch(value) {
  stitches = value;
  saveCounterToLocalStorage("stitchCounter", stitches);
}

function saveCounterToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function checkCounterValue(stitch) {
  if (!stitch) {
    stitch = 0;
  }
}

export function resetStitchCounter() {
  stitches = 0;
  saveCounterToLocalStorage("stitchCounter", stitches);
}