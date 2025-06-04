import { renderProjectsList } from "./project-list.js";

export function filterProjects(projects, filter) {
  const newArray = [];
  projects.filter((project) => {
    if (project.status === `${filter}`) {
      newArray.push(project);
    }
  });
  document.querySelector(
    ".js-project-quantity"
  ).innerHTML = `(${newArray.length})`;
  document.querySelector(".js-project-list").innerHTML =
    renderProjectsList(newArray);
}
