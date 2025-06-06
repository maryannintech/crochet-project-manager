import { stitches, currentStitch } from "../data/counter.js";
import { stitchCounterButtonFunctions } from "./stitch-counter.js";

export function renderStitchCounter() {
  let stitchCounterSectionHTML = `
          <p class="stitch-counter-message js-stitch-counter-message">
          set counter
        </p>
        <div class="counter js-counter">
          <div class="user-counter-input">
            <p class="right-counter js-current-stitch">0 /</p>
            <input
              type="number"
              placeholder="0"
              class="stitch-counter-input js-stitch-counter-input"
            />
            <p class="right-counter set-counter js-saved-stitch"></p>
          </div>
          <button class="set-counter-btn js-set-counter-btn">
            Set counter
          </button>
          <div class="counter-buttons js-counter-buttons"></div>
        </div>
    `;
  return stitchCounterSectionHTML;
}

export function renderStitchCounterButtons() {
  let stitchCounterButtonsHTML = `
        <button class="increase-btn js-increase-btn">Increase</button>
        <button class="decrease-btn js-decrease-btn">Decrease</button>
        <button class="reset-btn js-reset-btn">Reset Counter</button>
    `;
  return stitchCounterButtonsHTML;
}

export function renderAfterSettingStitch() {
  const infoMessage = document.querySelector(".js-stitch-counter-message");
  infoMessage.innerHTML = "happy crocheting!";
  document.querySelector(".js-saved-stitch").innerHTML = stitches;
  document.querySelector(".js-stitch-counter-input").classList.add("hide");
  document.querySelector(".js-counter-buttons").innerHTML =
    renderStitchCounterButtons();
  document.querySelector(".js-stitch-counter-input").value = "";
  document.querySelector(".js-stitch-counter-input").classList.add("hide");
  document.querySelector(".js-set-counter-btn").classList.add("hide");
  document.querySelector(".js-saved-stitch").innerHTML = `${stitches}`;
  document.querySelector(".js-current-stitch").innerHTML = `${currentStitch} /`;
  stitchCounterButtonFunctions();
}
