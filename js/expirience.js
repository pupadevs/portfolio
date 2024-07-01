// Función para abrir el modal de experiencia con datos específicos

// Inicialización del contenido de experiencia en el documento HTML
const experienceContent = {
    experience: `
        <div class="experience-grid">
            <div class="experience-item" onclick="openExperienceModal(
                'Programador Backend PHP',
                'IT Academy - Barcelona Activa',
                '09/23 - 03/24',
                ['Scrum, Swagger', 'UniTests, PHPUnit', 'GitActions', 'Resolución de problemas', 'Trabajo en equipo', 'Pensamiento crítico', 'Capacidad de aprendizaje continuo']
            )">
                <div class="experience-summary">Programador Backend PHP</div>
                <div class="experience-center">IT Academy - Barcelona Activa</div>
                <div class="experience-date">09/23 - 03/24</div>
                <div class="experience-skills">
                    <p><strong>Skills:</strong></p>
                    <ul>
                        <li>Scrum, Swagger</li>
                        <li>UniTests, PHPUnit</li>
                        <li>GitActions</li>
                    </ul>
                    <p><strong>Soft Skills:</strong></p>
                    <ul>
                        <li>Resolución de problemas</li>
                        <li>Trabajo en equipo</li>
                        <li>Pensamiento crítico</li>
                        <li>Capacidad de aprendizaje continuo</li>
                    </ul>
                </div>
            </div>
            <div class="experience-item" onclick="openExperienceModal(
                'Filmmaker',
                'FreeLance',
                '09/15 - 03/20',
                ['Comunicación efectiva', 'Gestión del tiempo', 'Creatividad', 'Adaptabilidad', 'Atención al detalle']
            )">
                <div class="experience-summary">Filmmaker</div>
                <div class="experience-center">FreeLance</div>
                <div class="experience-date">09/15 - 03/20</div>
                <div class="experience-skills">
                    <p><strong>Soft Skills:</strong></p>
                    <ul>
                        <li>Comunicación efectiva</li>
                        <li>Gestión del tiempo</li>
                        <li>Creatividad</li>
                        <li>Adaptabilidad</li>
                        <li>Atención al detalle</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
};

document.getElementById("experience").innerHTML = experienceContent.experience;
/* 
function openExperienceModal(summary, center, date, skills) {
    const modal = document.getElementById("experienceModal");
    const modalContent = document.getElementById("modalContent");
    const modalTitle = document.querySelector(".title-bar-text");

    modalTitle.textContent = summary;
    modalContent.innerHTML = `
        <div class="experience-modal-details">
           <p><>Como Desarollador en barcelona Activa </p>
        </div>
    `;
    const experienceDetails = experienceContent[experience``];
    if (experienceDetails) {
        modalTitle.textContent = experienceDetails.title;
        modalContent.innerHTML = `
                <p><strong>Descripción:</strong> ${experienceDetails.description}</p>
                <p><strong>Tecnologías:</strong> ${experienceDetails.technologies}</p>
                <p><strong>GitHub:</strong> <a href="${experienceDetails.github}" target="_blank">${experienceDetails.github}</a></p>
                <p><strong>Demo:</strong> <a href="${experienceDetails.demo}" target="_blank">${experienceDetails.demo}</a></p>
            `;
    } */

    // Cargar los datos de la experiencia en el modal   

  //  modal.style.display = "flex";
//}

// Función para cerrar el modal de experiencia
/* function closeExperienceModal() {
    document.getElementById("experienceModal").style.display = "none";
}
 */
