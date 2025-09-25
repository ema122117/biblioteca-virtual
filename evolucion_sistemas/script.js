// Generar PDF con jsPDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Evolución de las Arquitecturas de Sistemas", 10, 20);

  const arquitecturas = [
    "Monolítico",
    "Cliente-Servidor",
    "Archivos de Red",
    "Microservicios",
    "Cloud Computing",
    "Edge Computing"
  ];

  doc.setFontSize(12);
  arquitecturas.forEach((item, i) => {
    doc.text(`${i+1}. ${item}`, 10, 40 + i*10);
  });

  doc.save("arquitecturas.pdf");
});
