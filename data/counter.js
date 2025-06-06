export let stitches = JSON.parse(localStorage.getItem("stitchCounter"));
checkCounterValue(stitches);

export let currentStitch = JSON.parse(localStorage.getItem("currentStitch"));
checkCounterValue(currentStitch);

export function setStitch(value) {
  stitches = value;
  saveCounterToLocalStorage("stitchCounter", stitches);
}

export function setCurrentStitch(value) {
  currentStitch = value;
  saveCounterToLocalStorage("currentStitch", currentStitch);
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
  currentStitch = 0;
  saveCounterToLocalStorage("currentStitch", currentStitch);
  saveCounterToLocalStorage("stitchCounter", stitches);
}

export function increaseCurrentStitch() {
  if (currentStitch >= stitches) {
    return; 
  } else {
    currentStitch++;
    saveCounterToLocalStorage("currentStitch", currentStitch);
  }
}

export function decreaseCurrentStitch() {
  if (currentStitch > 0) {
    currentStitch--;
    saveCounterToLocalStorage("currentStitch", currentStitch);
  }
}
