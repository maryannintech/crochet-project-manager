import { renderAboutSection } from "./about-script/about-section.js";

export function renderAbout() {
    document.querySelector(".js-about-section").innerHTML = renderAboutSection();
}