document.addEventListener("DOMContentLoaded", function () {
    // Maximizar la ventana por defecto en pantallas pequeñas
    if (window.innerWidth <= 600) {
      document.getElementById("cvWindow").classList.add("maximized");
    }
  
    updateClock();
    setInterval(updateClock, 60000);
    showSection("about");
  });
  