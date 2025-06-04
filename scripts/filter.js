import { capitalizeFirstLetter } from "../utils/format-text.js";

export function renderProjectsList(projects) {
  let projectsListHTML = "";

  projects.forEach((project) => {
    projectsListHTML += `<div class="project-container" data-project-id="${
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
                      }"></span>${capitalizeFirstLetter(project.status)} </p> 
                      <p class="project-due-date">Due: ${project.dueDate}</p>
                    </div>
                  </div>
                  <div class="project-buttons">
                    <div class="edit-status-btn js-edit-status-btn" data-project-id="${
                      project.projectId
                    }"><i class='bx  bx-edit-alt'></i> </div>
                    <div class="delete-project-btn js-delete-project-btn" data-project-id="${
                      project.projectId
                    }">
                    <i class='bx  bx-trash-x'></i> 
                    </div>
                  </div>
                </div>
                <p class="project-notes">
                  Notes: ${
                    project.notes
                      ? capitalizeFirstLetter(project.notes)
                      : "No notes added"
                  }
                </p>
                <div class="bottom-border"></div>
              </div>
    `;
  });

  return projectsListHTML;
}
