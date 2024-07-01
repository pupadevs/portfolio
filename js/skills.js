const languagesContent = {
  languages: ` <p>Descripción de lenguajes</p>
                        <i class="fab fa-php"></i> PHP
                        <i class="fab fa-java"></i> Java
                        `,

}

document.getElementById("languages").innerHTML = languagesContent.languages;

const bbddContent = {
  databases: ` <p>Descripción de Bases de datos</p>
                        <i class="fas fa-database"></i> MySQL
                        <i class="fas fa-database"></i> PostgreSQL
                        `,
}
document.getElementById("databases").innerHTML = bbddContent.databases;

const frameworksContent = {
  frameworks: ` <p>Descripción de Frameworks</p>
                        <i class="fab fa-laravel"></i> Laravel
                        <i class="fab fa-java"></i> Spring
                        `,
}

document.getElementById("frameworks").innerHTML = frameworksContent.frameworks;
const toolsContent = {
    tools: `
      <p>Descripción de Herramientas</p>
      <div class="tools-list">
                            <div class="tool-item"><i class="fab fa-git"></i> Git</div>
                            <div class="tool-item"><i class="fab fa-github"></i> GitHub</div>
                            <div class="tool-item"><i class="fab fa-microsoft"></i> VSCode</div>
                            <div class="tool-item"><i class="fab fa-java"></i> IntelliJ IDEA</div>
                            <div class="tool-item"><i class="fab fa-java"></i> Eclipse</div>
                            <div class="tool-item"><i class="fab fa-microsoft"></i> Visual Studio</div>
                            <div class="tool-item"><i class="fas fa-database"></i> MySQL Workbench</div>
                            <div class="tool-item"><i class="fas fa-server"></i> phpMyAdmin</div>
                            <div class="tool-item"><i class="fas fa-cogs"></i> XAMPP</div>
                            <div class="tool-item"><i class="fas fa-flask"></i> Postman</div>
                            <div class="tool-item"><i class="fas fa-terminal"></i> Bash</div>
                            <div class="tool-item"><i class="fas fa-cube"></i> Composer</div>
                            <div class="tool-item"><i class="fas fa-cogs"></i> Maven</div>
                            <div class="tool-item"><i class="fas fa-server"></i> Apache</div>
                        </div>
                         `,
}

document.getElementById("tools").innerHTML = toolsContent.tools