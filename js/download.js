function downloadCV() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "docs/CV_PetersonSena.pdf";
    downloadLink.download = "Peterson_Sena_CV.pdf";
    downloadLink.click();
  }
  
