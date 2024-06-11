let progress = 0;
const speedElement = document.getElementById('speed');
const downloadedElement = document.getElementById('downloaded');
const progressFill = document.getElementById('progress-fill');
const totalMB = 50;

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


    function closeWindow() {
        const downloadWindow = document.getElementById('download-window');
        downloadWindow.style.display = 'none';
    }

       
});

function downloadCV() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "docs/CV_Peterson_Sena.pdf";
    downloadLink.download = "CV_Peterson_Sena.pdf";
    downloadLink.click();
}

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
const aboutContent = `
<div class="about-container">
    <div class="about-photo">
        <img src="img/petercover.jpg" alt="Foto de Perfil">
    </div>
    <div class="about-details">
        <button class="download-cv" onclick="downloadCV()">Descargar CV</button>
        <p>Email: <a href="mailto:petesonsena24@gmail.com">petesonsena24@gmail.com</a></p>
        <p>Teléfono: <a href="tel:+34695469001">+34695469001</a></p>
        <p>Programador PHP con experiencia previa como creador de videoclips musicales. Me reinventé hacia la programación, un mundo que siempre me ha cautivado desde mi primer encuentro con MS-DOS en 1995. Fusiono mi experiencia en la creación audiovisual con la programación para desarrollar soluciones innovadoras en este emocionante campo. Estoy siempre abierto a conocer nuevas tecnologías y aprender nuevas formas de lograr un código limpio y consistente. Disfruto sumergirme en desafios, son oportunidades para crecer y superarme constamente</p>
    </div>
</div>
`;
document.getElementById('about').innerHTML = aboutContent;

const experienceContent ={ 
experience:`
<div class="experience-grid">
    <div class="experience-item">
        <div class="experience-summary">Programador Backend PHP</div>
        <div class="experience-center">IT Academy- Barcelona Activa</div>
        <div class="experience-date">09/23 - 03/24</div>
        <div class="experience-skills">
        <p><strong>Habilidades aprendidas:</strong></p>
        <ul>
            <li>Scrum, Swagger</li>
            <li>UniTests, PHPUnit</li>
            <li>GitActions</li>
        </ul>
        <p><strong>Habilidades blandas:</strong></p>
        <ul>
            <li>Comunicación efectiva</li>
            <li>Gestión del tiempo</li>
            <li>Resolución de problemas</li>
            <li>Creatividad</li>
            <li>Trabajo en equipo</li>
            <li>Adaptabilidad</li>
            <li>Atención al detalle</li>
            <li>Pensamiento crítico</li>
            <li>Capacidad de aprendizaje continuo</li>
        </ul>
    </div>
    </div>
    <div class="experience-item">
    <div class="experience-summary">Filmmaker </div>
    <div class="experience-center">FreeLance</div>
    <div class="experience-date">09/15 - 03/20</div>
    <div class="experience-skills">
      <p><strong>Habilidades blandas:</strong></p>
<ul>
    <li>Comunicación efectiva</li>
    <li>Gestión del tiempo</li>
    <li>Resolución de problemas</li>
    <li>Creatividad</li>
    <li>Trabajo en equipo</li>
    <li>Adaptabilidad</li>
    <li>Atención al detalle</li>
</ul>
    </div>
</div>
    </div>
`};

document.getElementById('experience').innerHTML = experienceContent.experience;

const studiesContent = {
    bootcamps: `
        <div class="bootcamp-grid">
        <div class="study-item">
        <div class="study-summary">Bootcamp de Java </div>
        <div class="studycenter">Alura - Oracle Next Education</div>
        <div class="study-date">12/22 -present</div>
        <div class="study-skills">
            <p><strong>Habilidades aprendidas:</strong></p>
            <ul>
                <li>Java, OOP, PostgreSQL</li>
                <li>Spring boot, Hibernate</li>
                <li>Maven, IntelliJ, Eclipse</li>
            </ul>
        </div>
    </div>
            <div class="study-item">
                <div class="study-summary">Boot Camp Full Stack PHP</div>
                <div class="studycenter">IT Academy Barcelona Activa</div>
                <div class="study-date">03/23 - 09/2023</div>
                <div class="study-skills">
                    <p><strong>Habilidades aprendidas:</strong></p>
                    <ul>
                        <li>PHP, Laravel, MySQL</li>
                        <li>HTML, CSS</li>
                        <li>Git, XAMPP, PHPMyAdmin, Composer</li>
                    </ul>
                </div>
            </div>
           
            <div class="study-item">
                <div class="study-summary">Edic y Postprod de audiovisuales</div>
                <div class="studycenter">35mm School</div>
                <div class="study-date">02/19 - 02/20</div>
                <div class="study-skills">
                    <p><strong>Habilidades aprendidas:</strong></p>
                    <ul>
                        <li>Davinci Resolve</li>
                        <li>Adobe After Effects</li>
                        <li>Adobe Premiere</li>
                    </ul>
                </div>
            </div>
            
        </div>
    `,
    certifications: `
    <div class="cert-grid">
        
    </div>


    `
};

document.getElementById('bootcamps').innerHTML = studiesContent.bootcamps;
document.getElementById('certifications').innerHTML = studiesContent.certifications;

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}
window.showSection = showSection;
window.showSubsection = showSubsection;
window.showSubsectionSkills = showSubsectionSkills;
window.maximizeWindow = maximizeWindow;
window.closeWindow = closeWindow;
window.downloadCV = downloadCV;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.toggleStartMenu = toggleStartMenu;
