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
    <div class="about-details" id="about-details">
        <button class="download-cv" onclick="downloadCV()">Descargar CV</button>
        <p></p>
        <p>Hola👋. Programador PHP apasionado por la tecnología. Me especializo en escribir código limpio y eficiente, siempre buscando la excelencia en cada proyecto. </p>
        <p>Soy curioso por naturaleza, lo que me impulsa a explorar continuamente nuevas tecnologías y metodologías </p>
        <br>
        <p>Si estás interesado en trabajar conmigo, no dudes en contactarme. Estaré encantado de trabajar contigo. 🚀</p>
       
    </div>
</div>
`;
document.getElementById("about").innerHTML = aboutContent;