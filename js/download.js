function downloadCV() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "docs/CV_PetersonSena.pdf";
    downloadLink.download = "CV_PetersonSena.pdf";
    downloadLink.click();
  }
  
