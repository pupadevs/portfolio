/* function closeWindow() {
  const downloadWindow = document.getElementById("download-window");
  downloadWindow.style.display = "none";
}

function minimizeWindow() {
  document.getElementById("cvWindow").classList.add("minimized");
} */

function maximizeWindow() {
  const windowElement = document.getElementById("cvWindow");
  if (windowElement.classList.contains("maximized")) {
    windowElement.classList.remove("maximized");
  } else {
    windowElement.classList.add("maximized");
  }
}
