import { renderProjects } from "./my-projects.js";
import { renderCounter } from "./stitch-counter.js";
import {
  currentLocation,
  setCurrentLocation,
} from "../data/current-location.js";

const activeSection = document.querySelector(".js-active-section");
const myProjectLink = document.querySelector(".js-project-link");
const stitchCounterLink = document.querySelector(".js-stitch-counter-link");
const aboutLink = document.querySelector(".js-about-link");
const isSelectedNav = document.querySelector(".isSelected");
const projectSection = document.querySelector(".js-project-section-container");
const stitchCounterSection = document.querySelector(
  ".js-stitch-counter-section"
);
const navElement = document.querySelector(".nav-link");
isSelectedNav.classList.remove("isSelected");

export function controlNavBar() {
  function setActive(section) {
    projectSection.classList.add("hide");
    stitchCounterSection.classList.add("hide");

    myProjectLink.classList.remove("isSelected");
    stitchCounterLink.classList.remove("isSelected");

    if (section === "projects") {
      projectSection.classList.remove("hide");
      myProjectLink.classList.add("isSelected");
      renderProjects();
      setCurrentLocation("projects");
    } else if (section === "stitch-counter") {
      stitchCounterSection.classList.remove("hide");
      stitchCounterLink.classList.add("isSelected");
      renderCounter();
      setCurrentLocation("stitch-counter");
    }
  }

  setActive(currentLocation);

  myProjectLink.addEventListener("click", () => {
    if (currentLocation !== "projects") {
      setActive("projects");
    }
  });

  stitchCounterLink.addEventListener("click", () => {
    if (currentLocation !== "stitch-counter") {
      setActive("stitch-counter");
    }
  });
}
