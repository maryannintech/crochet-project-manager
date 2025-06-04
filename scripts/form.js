export function renderFormHTML() {
  const formHTML = `<form class="form-add-project js-form-add-project hide">
      <h1>Add Project</h1>
      <label for="project-name-input">Name: </label>
      <input
        type="text"
        id="project-name-input"
        name="project-name"
        class="js-project-name-input"
        required
        minlength="5"
        maxlength="20"
        placeholder="Enter project name"
      />
      <label for="project-status-input">Status:</label>
      <select
        id="project-status-input"
        name="project-status"
        class="js-project-status-input"
        required
      >
        <option value="planned">Planned</option>
        <option value="ongoing">Ongoing</option>
      </select>
      <label for="project-due-date-input">Due date:</label>
      <input
        type="date"
        id="project-due-date-input"
        class="js-project-duedate-input"
        name="project-due-date"
        required
      />
      <label for="project-notes-input">Notes:</label>
      <textarea
        id="project-notes-input"
        name="project-notes"
        maxlength="150"
        placeholder="Enter any notes about the project"
        class="project-notes-input js-project-notes-input"
      ></textarea>
      <button type="submit" class="add-project-btn js-add-project-btn-form">
        + Add Project
      </button>
      <button type="button" class="cancel-project-btn js-cancel-project-btn">
        Cancel
      </button>
    </form>`;

    return formHTML;
}
