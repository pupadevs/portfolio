document.addEventListener("DOMContentLoaded", function() {
    // Maximizar la ventana por defecto en pantallas pequeñas
    if (window.innerWidth <= 600) {
        document.getElementById("cvWindow").classList.add("maximized");
       
    }
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // El reloj de 12 horas no tiene "00" horas
        minutes = minutes < 10 ? '0' + minutes : minutes;

        const timeString = `${hours}:${minutes} ${ampm}`;
        document.getElementById('taskbarClock').textContent = timeString;
    }

    // Actualizar el reloj inmediatamente y luego cada minuto
    updateClock();
    setInterval(updateClock, 60000);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar la sección "Sobre mí" por defecto
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
    
});

function minimizeWindow() {
    document.getElementById('cvWindow').classList.add('minimized');
}

function toggleStartMenu() {
    const startMenu = document.getElementById("startMenu");
    startMenu.style.display = startMenu.style.display === "block" ? "none" : "block";
}

function maximizeWindow() {
    const windowElement = document.getElementById('cvWindow');
    if (windowElement.classList.contains('maximized')) {
        windowElement.classList.remove('maximized');
    } else {
        windowElement.classList.add('maximized');
    }
}

/* function closeWindow() {
    document.getElementById('cvWindow').style.display = 'none';
} */

function showSubsection(subsectionId) {
    const subsections = document.querySelectorAll('#studies .subsection');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });
    document.getElementById(subsectionId).style.display = 'block';
    document.getElementById('studies').style.display = 'block'; // Ensure the main section is also displayed
}

function showSubsectionSkills(subsectionId) {
    const subsections = document.querySelectorAll('#skills .subsection');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });
    document.getElementById(subsectionId).style.display = 'block';
    document.getElementById('skills').style.display = 'block'; // Ensure the main section is also displayed
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');

    // Información del proyecto (puedes cambiar esto por datos dinámicos)
    const projectDetails = {
        project1: {
            title: 'Dice API Game',
            description: 'Backend De una API REST para un juego de dados. Hecha en laravel, utilizando Laravel Passport para autenticación, Spatie Permission para la gestion de roles y permisos.',
            technologies: 'PHP, Laravel, MySQL',
            github: 'https://github.com/usuario/proyecto1',
            demo: 'https://usuario.github.io/proyecto1'
        },
        project2: {
            title: 'ITA Profiles Back End',
            description: 'API REST para la gestión de estudiantes con empresas del IT Academy de Barcelona Activa, colaborando como programador back-end',
            technologies: 'PHP, Laravel, MySQL, Swagger',
            github: 'https://github.com/IT-Academy-BCN/ita-profiles-backend',
            demo: 'https://ita-profiles.netlify.app/'
        }
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
        modal.style.display = 'flex';
    }
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}
