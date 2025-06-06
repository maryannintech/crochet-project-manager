import {
  stitches,
  currentStitch,
  setStitch,
  resetStitchCounter,
  increaseCurrentStitch,
  decreaseCurrentStitch,
} from "../data/counter.js";
import {
  renderStitchCounter,
  renderStitchCounterButtons,
  renderAfterSettingStitch,
} from "./stitch-counter-section.js";

renderCounter();

export function renderCounter() {
  const stitchCounterSectionHTML = document.querySelector(".js-stitch-counter");
  stitchCounterSectionHTML.innerHTML = renderStitchCounter();
  let inputStitch = document.querySelector(".js-stitch-counter-input");
  const infoMessage = document.querySelector(".js-stitch-counter-message");
  const savedStitch = document.querySelector(".js-saved-stitch");

  if (stitches && stitches !== 0) {
    infoMessage.classList.add("hide");
    renderAfterSettingStitch();
  }

  const setStitchButton = document.querySelector(".js-set-counter-btn");
  setStitchButton.addEventListener("click", () => {
    if (inputStitch.value.trim() === "" || inputStitch.value <= 0) {
      infoMessage.innerHTML = "Please enter a valid number";
      setTimeout(() => {
        infoMessage.innerHTML = "set counter";
      }, 2000);
    } else {
      setStitch(inputStitch.value);
      savedStitch.innerHTML = stitches;
      inputStitch.value = "";
      inputStitch.classList.add("hide");
      document.querySelector(".js-counter-buttons").innerHTML =
        renderStitchCounterButtons();
      setStitchButton.classList.add("hide");
      stitchCounterButtonFunctions();
    }
  });
}

export function stitchCounterButtonFunctions() {
  document.querySelector(".js-increase-btn").addEventListener("click", () => {
    increaseCurrentStitch();
    setCurrentStitch();
  });

  document.querySelector(".js-decrease-btn").addEventListener("click", () => {
    decreaseCurrentStitch();
    setCurrentStitch();
  });

  document.querySelector(".js-reset-btn").addEventListener("click", () => {
    resetStitchCounter();
    renderCounter();
    console.log(stitches);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    increaseCurrentStitch();
    setCurrentStitch();
  } else if (event.key === "ArrowDown") {
    decreaseCurrentStitch();
    setCurrentStitch();
  }
});

function setCurrentStitch() {
  const currentStitchElement = document.querySelector(".js-current-stitch");
  currentStitchElement.innerHTML = `${currentStitch} /`;
}
