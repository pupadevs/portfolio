function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
    hours = hours ? hours : 12; // El reloj de 12 horas no tiene "00" horas
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    const timeString = `${hours}:${minutes} ${ampm}`;
    document.getElementById("taskbarClock").textContent = timeString;
  }
  