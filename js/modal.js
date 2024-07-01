function openProjectModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const modalTitle = document.getElementById("modalTitle");
  
    // Información del proyecto (puedes cambiar esto por datos dinámicos)
    const projectDetails = {
      project1: {
        title: "Dice API Game",
        description:
          "Backend De una API REST para un juego de dados. Hecha en laravel, utilizando Laravel Passport para autenticación, Spatie Permission para la gestion de roles y permisos.",
        technologies: "PHP, Laravel, MySQL",
        github: "https://github.com/pupadevs/diceGameAPI",
        demo: "https://dicegameapi.fly.dev/",
      },
      project2: {
        title: "ITA Profiles Back End",
        description:
          "API REST para la gestión de estudiantes con empresas del IT Academy de Barcelona Activa, colaborando como programador back-end",
        technologies: "PHP, Laravel, MySQL, Swagger",
        github: "https://github.com/IT-Academy-BCN/ita-profiles-backend",
        demo: "",
      },
    };
  
    const project = projectDetails[projectId];
    if (project) {
      modalTitle.textContent = project.title;
      modalContent.innerHTML = `
              <p><strong>Descripción:</strong> ${project.description}</p>
              <p><strong>Tecnologías:</strong> ${project.technologies}</p>
              <p><strong>GitHub:</strong> <a href="${project.github}" target="_blank">${project.github}</a></p>
              <p><strong>Demo:</strong> <a href="${project.demo}" target="_blank">${project.demo}</a></p>
          `;
      modal.style.display = "flex";
    }
  }
  
  function closeProjectModal() {
    document.getElementById("projectModal").style.display = "none";
  }
  