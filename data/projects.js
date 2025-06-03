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

function saveToStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
