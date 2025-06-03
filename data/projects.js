export let projects = JSON.parse(localStorage.getItem("projects"));

if (!projects) {
  projects = [];
}

export function removeProject(projectId) {
  const newProjects = [];
  projects.forEach((project) => {
    project.projectId !== projectId ? newProjects.push(project) : null;
  });

  projects = newProjects;
  console.log(projects);
  saveToStorage();
}

export function addProject(projectName, status, dueDate, notes) {
  projects.push({
    projectId: crypto.randomUUID(),
    projectName,
    status,
    dueDate,
    notes: notes || "",
  });
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
