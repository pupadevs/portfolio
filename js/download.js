function downloadCV() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "docs/Peterson_Sena_CV.pdf";
    downloadLink.download = "CV_Peterson_Sena.pdf";
    downloadLink.click();
  }
  