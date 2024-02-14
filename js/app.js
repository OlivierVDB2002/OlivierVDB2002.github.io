fetch('json/personal.json')
      .then(response => response.json())
      .then(data => {
        const projectList = document.getElementById('project-list');
        data.projects.forEach(project => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p>Technologieën: ${project.technologies.join(', ')}</p>
          `;
          projectList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Er is een fout opgetreden bij het ophalen van de projecten:', error));


