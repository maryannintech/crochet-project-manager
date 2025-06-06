import {
  stitchCounter,
  setStitchCounter,
  resetStitchCounter,
} from "../data/counter.js";

const stitchCounterMessageElement = document.querySelector(
  ".js-stitch-counter-message"
);

document.querySelector(".js-starting-message").classList.add("hide");

const counterButtonsElement = document.querySelector(".js-counter-buttons");
const setCounterButtonElement = document.querySelector(".js-set-counter-btn");
const setCounterValueElement = document.querySelector(
  ".js-stitch-counter-input"
);
const setStitchCount = document.querySelector(".js-set-counter");
const counterButtonsHTML = `
    <button class="increase-btn js-increase-btn">Increase</button>
    <button class="decrease-btn js-decrease-btn">Decrease</button>
    <button class="reset-btn js-reset-btn">Reset Counter</button>
`;

if (stitchCounter === 0) {
  stitchCounterMessageElement.classList.remove("hide");
} else {
  setStitchCount.innerHTML = stitchCounter;
  setCounterValueElement.classList.add("hide");
  setCounterButtonElement.classList.add("hide");
  counterButtonsElement.innerHTML = counterButtonsHTML;
}

setCounterButtonElement.addEventListener("click", () => {
  if (
    setCounterValueElement.value === "" ||
    setCounterValueElement.value <= 0
  ) {
    stitchCounterMessageElement.innerHTML =
      "please enter a valid value to set the counter.";
    setTimeout(() => {
      stitchCounterMessageElement.innerHTML = "set counter";
    }, 2000);
  } else {
    setStitchCounter(Number(setCounterValueElement.value));
    counterButtonsElement.innerHTML = counterButtonsHTML;
    setCounterButtonElement.classList.add("hide");
    setCounterValueElement.classList.add("hide");
    setStitchCount.innerHTML = setCounterValueElement.value;
    stitchCounterMessageElement.innerHTML = `happy crocheting!`;
  }
});

document.querySelector(".js-reset-btn").addEventListener("click", () => {
  resetStitchCounter();
  counterButtonsElement.innerHTML = "";
  setCounterValueElement.classList.remove("hide");
  setCounterValueElement.value = "";
  setCounterValueElement.classList.add("hide");
});
