
const studiesContent = {
    bootcamps: `
         <div class="bootcamp-grid">
      <div class="study-item">
          <div class="study-summary">Bootcamp de Java</div>
          <div class="studycenter">Alura - Oracle Next Education</div>
          <div class="study-date">12/22 - present</div>
          <div class="study-skills">
              <p><strong>Skills:</strong></p>
              <ul>
                  <li>Java, OOP, PostgreSQL</li>
                  <li>Spring boot, Hibernate</li>
                  <li>Maven, IntelliJ, Eclipse</li>
              </ul>
          </div>
      </div>
      <div class="study-item">
          <div class="study-summary">BootCamp Full Stack PHP</div>
          <div class="studycenter">IT Academy Barcelona Activa</div>
          <div class="study-date">03/23 - 09/2023</div>
          <div class="study-skills">
              <p><strong>Skills:</strong></p>
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
              <p><strong>Skills:</strong></p>
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
  
  
      `,
  };
  
  document.getElementById("bootcamps").innerHTML = studiesContent.bootcamps;
  document.getElementById("certifications").innerHTML =
    studiesContent.certifications;