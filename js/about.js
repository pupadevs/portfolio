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
        <p>Hola👋. Soy Peterson Sena, programador Backend junior con una pasión que se remonta a mis primeros días explorando MS-DOS en 1995. Me he especializado en el desarrollo backend, donde cada línea de código representa una oportunidad para aprender y mejorar.</p>
        <p>Creo firmemente en el poder de la curiosidad y el aprendizaje continuo para poder impulsar la innovación y la calidad en el desarrollo de software. </p>
        <br>
        <p>Si estás interesado en trabajar conmigo, no dudes en contactarme. Estaré encantado de trabajar contigo. 🚀</p>
       
    </div>
</div>
`;
document.getElementById("about").innerHTML = aboutContent;