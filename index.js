import {
  projects,
  addProject,
  removeProject,
  updateProject,
} from "./data/projects.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { renderProjectsList } from "./scripts/project-list.js";
import { capitalizeFirstLetter } from "./utils/format-text.js";

renderProjects();
const todayElement = document.querySelector(".js-date");
todayElement.innerHTML = `today is ${dayjs()
  .format("MMMM D, YYYY")
  .toLowerCase()}`;

const addProjectForm = document.querySelector(".js-form-add-project");
document
  .querySelector(".js-add-project-button")
  .addEventListener("click", () => {
    addProjectForm.classList.toggle("hide");
  });

document
  .querySelector(".js-cancel-project-btn")
  .addEventListener("click", () => {
    addProjectForm.classList.add("hide");
  });

addProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const projectName = document.querySelector(".js-project-name-input").value;
  const projectStatus = document.querySelector(
    ".js-project-status-input"
  ).value;
  const projectDueDate = document.querySelector(
    ".js-project-duedate-input"
  ).value;
  const projectNotes = document.querySelector(".js-project-notes-input").value;

  addProject(projectName, projectStatus, projectDueDate, projectNotes);
  renderProjects();
  addProjectForm.reset();
  addProjectForm.classList.add("hide");

  displayFeedbackMessage(`Project "${projectName}" added successfully!`);
});

function renderProjects() {
  document.querySelector(
    ".js-project-quantity"
  ).innerHTML = `(${projects.length})`;
  const noProjectMessage = document.querySelector(".js-starting-message");
  if (projects.length === 0) {
    noProjectMessage.classList.remove("hide");
    document.querySelector(".js-project-list").innerHTML = "";
    return;
  } else {
    noProjectMessage.classList.add("hide");
  }

  let projectListHTML = renderProjectsList(projects);

  document.querySelector(".js-project-list").innerHTML = projectListHTML;

  document
    .querySelector(".js-planned-filter-btn")
    .addEventListener("click", () => {
      const plannedFilter = [];
      projects.filter((project) => {
        if (project.status === "planned") {
          plannedFilter.push(project);
        }
      });
      document.querySelector(
        ".js-project-quantity"
      ).innerHTML = `(${plannedFilter.length})`;
      document.querySelector(".js-project-list").innerHTML =
        renderProjectsList(plannedFilter);
      projectButtonsFunctions();
    });

  document
    .querySelector(".js-ongoing-filter-btn")
    .addEventListener("click", () => {
      const ongoingFilter = [];
      projects.filter((project) => {
        if (project.status === "ongoing") {
          ongoingFilter.push(project);
        }
      });
      document.querySelector(
        ".js-project-quantity"
      ).innerHTML = `(${ongoingFilter.length})`;
      document.querySelector(".js-project-list").innerHTML =
        renderProjectsList(ongoingFilter);
      projectButtonsFunctions();
    });
  document.querySelector(".js-all-filter-btn").addEventListener("click", () => {
    renderProjects();
  });
  projectButtonsFunctions();
}

function displayFeedbackMessage(message) {
  const bottomMessageElement = document.querySelector(".js-added-message");
  bottomMessageElement.classList.remove("hide");
  bottomMessageElement.innerHTML = `${message}`;
  setTimeout(() => {
    bottomMessageElement.classList.add("hide");
  }, 2000);
}

function projectButtonsFunctions() {
  document.querySelectorAll(".js-delete-project-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.dataset.projectId;
      removeProject(projectId);
      renderProjects();

      displayFeedbackMessage(`Project removed successfully!`);
    });
  });
  document.querySelectorAll(".js-edit-status-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.dataset.projectId;
      document
        .querySelectorAll(`.js-edit-input-${projectId}`)
        .forEach((inputElement) => {
          inputElement.classList.toggle("hide");
        });
      document
        .querySelectorAll(`.js-project-detail-${projectId}`)
        .forEach((element) => {
          element.classList.toggle("hide");
        });

      document
        .querySelectorAll(`.js-save-btn-${projectId}`)
        .forEach((saveButton) => {
          saveButton.classList.toggle("hide");
        });

      document.querySelectorAll(".js-save-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const projectNameInput = document.querySelector(
            `.js-edit-project-name-${projectId}`
          );
          const projectStatusInput = document.querySelector(
            `.js-edit-project-status-${projectId}`
          );
          const projectDueDateInput = document.querySelector(
            `.js-edit-project-duedate-${projectId}`
          );
          const projectNotesInput = document.querySelector(
            `.js-edit-project-notes-${projectId}`
          );
          updateProject(
            projectId,
            projectNameInput.value,
            projectStatusInput.value,
            projectDueDateInput.value,
            projectNotesInput.value
          );
          renderProjects();
          console.log(projects);

          displayFeedbackMessage(`Project updated successfully!`);
        });
      });
    });
  });
}
