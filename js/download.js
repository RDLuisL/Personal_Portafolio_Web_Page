function downloadCV(filePath) {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.split("/").pop(); // Extrae el nombre del archivo
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
