import { projects, addProject, removeProject } from "./data/projects.js";
import { capitalizeFirstLetter } from "./utils/format-text.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

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

  addProjectForm.reset();
  renderProjects();
});

function renderProjects() {
  document.querySelector(".js-project-quantity").innerHTML = `(${projects.length})`
  const noProjectMessage = document.querySelector(".js-starting-message");
  if (projects.length === 0) {
    noProjectMessage.classList.remove("hide");
    document.querySelector(".js-project-list").innerHTML = "";
    return;
  } else {
    noProjectMessage.classList.add("hide");
  }

  let projectListHTML = "";

  projects.forEach((project) => {
    projectListHTML += `<div class="project-container" data-project-id="${
      project.projectId
    }">
            <div class="project-content">
              <div class="proj-img-and-details">
                <div class="project-image">
                  <img src="images/yarn-ball.png" class="project-image" />
                </div>
                <div class="project-details">
                  <p class="project-name">${capitalizeFirstLetter(
                    project.projectName
                  )}</p>
                  <p class="project-status"><span class="status-icon ${
                    project.status
                  }"></span>${capitalizeFirstLetter(project.status)}</p>
                  <p class="project-due-date">Due: ${project.dueDate}</p>
                </div>
              </div>
              <div class="project-buttons">
                <div class="edit-status-btn js-edit-status-btn"><i class='bx  bx-edit-alt'></i> </div>
                <div class="delete-project-btn js-delete-project-btn" data-project-id="${
                  project.projectId
                }">
                <i class='bx  bx-trash-x'></i> 
                </div>
              </div>
            </div>
            <p class="project-notes">
              Notes: ${project.notes ? capitalizeFirstLetter(project.notes) : "No notes added"}
            </p>
            <div class="bottom-border"></div>
          </div>
`;
  });

  document.querySelector(".js-project-list").innerHTML = projectListHTML;

  document.querySelectorAll(".js-delete-project-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.dataset.projectId;
      removeProject(projectId);
      renderProjects();
    });
  });
}
