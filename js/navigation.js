function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
    document.getElementById("titleBarText").innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
  }
  
  function toggleStartMenu() {
    const startMenu = document.getElementById("startMenu");
    startMenu.style.display =
      startMenu.style.display === "block" ? "none" : "block";
  }
  
  function showSubsection(subsectionId) {
    const subsections = document.querySelectorAll("#studies .subsection");
    subsections.forEach((subsection) => {
      subsection.style.display = "none";
    });
    document.getElementById(subsectionId).style.display = "block";
    document.getElementById("studies").style.display = "block"; // Ensure the main section is also displayed
  }
  
  function showSubsectionSkills(subsectionId) {
    const subsections = document.querySelectorAll("#skills .subsection");
    subsections.forEach((subsection) => {
      subsection.style.display = "none";
    });
    document.getElementById(subsectionId).style.display = "block";
    document.getElementById("skills").style.display = "block"; // Ensure the main section is also displayed
  }
  