const aboutContent = `
<div class="about-container">
    <div class="about-photo">
        <img src="img/petercovervga.jpg" alt="Foto de Perfil">
        <div class="contact-details">
        <a href="mailto:petesonsena24@gmail.com">
            <i class="fas fa-envelope"></i> 
        </a>
        <a href="tel:+34695469001">
        <i class="fas fa-phone"></i>
     </a>
    </div>
    </div>
    <div class="about-details">
        <button class="download-cv" onclick="downloadCV()">Descargar CV</button>
     
        <p>Soy programador Backend con una pasión que se remonta a mis primeros días explorando <i class="fas fa-desktop"></i> MS-DOS en 1995. Me he enfocado en el desarrollo backend, donde cada línea de código es una oportunidad para poder aprender y mejorar.</p>
    
        <p>Admito que estoy en una etapa inicial de mi carrera, me considero un junior muy curioso. Me entusiasma enfrentarme a nuevos retos y encontrar soluciones que no solo funcionen, sino que también sean eficientes. </p>
        <br>
        <p>Si estás interesado en trabajar conmigo, no dudes en contactarme. Estaré encantado de trabajar contigo. 🚀</p>
    </div>
</div>
`;
document.getElementById("about").innerHTML = aboutContent;