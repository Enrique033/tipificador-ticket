const inputNombre = document.getElementById("nombre");

inputNombre.addEventListener("blur", () => {
  let texto = inputNombre.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

  if (texto.length === 0) return;

  const palabras = texto.split(" ");

  const formateado = palabras
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

  inputNombre.value = formateado;
});
