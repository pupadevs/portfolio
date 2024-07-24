function downloadCV() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "docs/CV_Peterson_Sena (4).pdf";
    downloadLink.download = "CV_Peterson_Sena.pdf";
    downloadLink.click();
  }
  
