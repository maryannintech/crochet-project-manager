import { stitches, setStitch, resetStitchCounter } from "../data/counter.js";
import {
  renderStitchCounter,
  renderStitchCounterButtons,
  renderAfterSettingStitch,
} from "./stitch-counter-section.js";

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
  if (inputStitch.value === " " || inputStitch.value <= 0) {
    infoMessage.innerHTML = "Please enter a valid number";
    setTimeout(() => {
      infoMessage.innerHTML = "set counter";
    }, 2000);
  } else {
    setStitch(inputStitch.value);
    console.log(stitches);
    savedStitch.innerHTML = stitches;
    inputStitch.values = "";
    inputStitch.classList.add("hide");
    document.querySelector(".js-counter-buttons").innerHTML =
      renderStitchCounterButtons();
    setStitchButton.classList.add("hide");
    stitchCounterButtonFunctions();
  }
});


export function stitchCounterButtonFunctions() {
  document.querySelector(".js-increase-btn").addEventListener("click", () => {
    console.log(stitches);
  });
  document.querySelector(".js-reset-btn").addEventListener("click", () => {
    console.log("reset");
  });
}
