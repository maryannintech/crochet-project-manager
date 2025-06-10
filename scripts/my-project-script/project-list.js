import { capitalizeFirstLetter } from "../../utils/format-text.js";

export function renderProjectsList(projects) {
  let projectsListHTML = "";

  projects.forEach((project) => {
    projectsListHTML += `<div class="project-container" data-project-id="${
      project.projectId
    }">
                <div class="project-content">
                  <div class="proj-img-and-details">
                    <div class="project-image">
                      <img src="images/yarn-ball-default.png" class="project-image" />
                    </div>
                    <div class="project-details">
                      <p class="js-project-detail-${
                        project.projectId
                      } project-name">${capitalizeFirstLetter(
      project.projectName
    )}</p>
                      <input type="text" class="hide js-edit-input-${
                        project.projectId
                      } edit-input js-edit-project-name-${
      project.projectId
    }" value="${capitalizeFirstLetter(project.projectName)}">
                      <p class="project-status js-project-detail-${
                        project.projectId
                      }"><span class="status-icon ${
      project.status
    }"></span>${capitalizeFirstLetter(project.status)} </p>
                      <select class="hide js-edit-input-${
                        project.projectId
                      } edit-input js-edit-project-status-${project.projectId}">
                        <option ${
                          project.status === "planned" ? "selected" : ""
                        } value="planned">Planned</option>
                        <option ${
                          project.status === "ongoing" ? "selected" : ""
                        } value="ongoing">Ongoing</option>
                        </select>
                      <p class="project-due-date js-project-detail-${
                        project.projectId
                      }">Due: ${project.dueDate}</p>
                      <input type="date" class="hide edit-input js-edit-input-${
                        project.projectId
                      } js-edit-project-duedate-${project.projectId}" value="${
      project.dueDate
    }"> 
                    </div>
                  </div>
                  <div class="project-buttons js-project-buttons-${project.projectId}">
                    <div title="click to save changes" class="hide save-btn js-save-btn js-save-btn-${project.projectId}" data-project-id="${
                      project.projectId
                    }"><i class='bx bx-save'></i></div>
                    <div title="click to edit details" class="edit-status-btn js-edit-status-btn" data-project-id="${
                      project.projectId
                    }"><i class='bx  bx-edit-alt'></i> </div>
                    <div title="click to remove project" class="delete-project-btn js-delete-project-btn" data-project-id="${
                      project.projectId
                    }">
                    <i class='bx  bx-trash-x'></i> 
                    </div>
                  </div>
                </div>
                <p class="project-notes js-project-detail-${project.projectId}">
                  Notes: ${
                    project.notes
                      ? capitalizeFirstLetter(project.notes)
                      : "No notes added"
                  }
                </p>
                <textarea class="hide js-edit-input-${
                  project.projectId
                } edit-input js-edit-project-notes-${
      project.projectId
    }" placeholder="Enter any notes about the project" style="margin-left: 20px; width: 50%">${
      project.notes || ""
    }</textarea>
                <div class="bottom-border"></div>
              </div>
    `;
  });

  return projectsListHTML;
}
