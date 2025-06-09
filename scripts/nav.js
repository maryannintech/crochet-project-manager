import { renderProjects } from "./my-projects.js";
import { renderCounter } from "./stitch-counter.js";
import { renderAbout } from "./about.js";
import {
  currentLocation,
  setCurrentLocation,
} from "../data/current-location.js";

const myProjectLink = document.querySelector(".js-project-link");
const stitchCounterLink = document.querySelector(".js-stitch-counter-link");
const aboutLink = document.querySelector(".js-about-link");
const isSelectedNav = document.querySelector(".isSelected");
const projectSection = document.querySelector(".js-project-section-container");
const stitchCounterSection = document.querySelector(
  ".js-stitch-counter-section"
);
const aboutSection = document.querySelector(".js-about-section");

export function controlNavBar() {
  setActive(currentLocation);
  function setActive(section) {
    isSelectedNav.classList.remove("isSelected");
    projectSection.classList.add("hide");
    stitchCounterSection.classList.add("hide");
    aboutSection.classList.add("hide");

    myProjectLink.classList.remove("isSelected");
    stitchCounterLink.classList.remove("isSelected");
    aboutLink.classList.remove("isSelected");

    if (section === "projects") {
      projectSection.classList.remove("hide");
      myProjectLink.classList.add("isSelected");
      renderProjects();
    } else if (section === "stitch-counter") {
      stitchCounterSection.classList.remove("hide");
      stitchCounterLink.classList.add("isSelected");
      renderCounter();
    } else if (section === "about") {
      aboutSection.classList.remove("hide");
      aboutLink.classList.add("isSelected");
      renderAbout();
    }

    setCurrentLocation(section);
  }

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

  aboutLink.addEventListener("click", () => {
    if (currentLocation !== "about") {
      setActive("about");
    }
  });
}
