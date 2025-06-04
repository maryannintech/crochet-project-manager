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
                      <input type="text" class="edit-input js-edit-project-name-${project.projectId}" value="${capitalizeFirstLetter(project.projectName)}">
                      <p class="project-status"><span class="status-icon ${
                        project.status
                      }"></span>${capitalizeFirstLetter(project.status)} </p>
                      <select class="edit-input js-edit-project-status-${project.projectId}">
                        <option ${project.status === "planned" ? "selected" : ""} value="not-started">Planned</option>
                        <option ${project.status === "ongoing" ? "selected" : ""} value="in-progress">Ongoing</option>
                        </select>
                      <p class="project-due-date">Due: ${project.dueDate}</p>
                      <input type="date" class="edit-input js-edit-project-duedate-${project.projectId}" value="${project.dueDate}"> 
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
                <textarea class="edit-input js-edit-project-notes-${project.projectId}" placeholder="Enter any notes about the project" style="margin-left: 20px; width: 80%">${project.notes || ""}</textarea>
                <div class="bottom-border"></div>
              </div>
    `;
  });

  return projectsListHTML;
}
