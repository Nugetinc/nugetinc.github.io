async function loadProjects() {
    const response = await fetch('projects.json');
    const projects = await response.json();
  
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');
      card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      `;
      card.onclick = () => openModal(project);
      container.appendChild(card);
    });
  }
  
  function openModal(project) {
    document.getElementById("modal-details").innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.advanced}</p>
      <p>
        <a href="${project.link}" target="_blank">GitHub</a> 
      </p>
    `;
    document.getElementById("modal").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  
  loadProjects();
  