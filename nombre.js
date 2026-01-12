const inputNombre = document.getElementById("nombre");

inputNombre.addEventListener("blur", () => {
  let texto = inputNombre.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

  if (texto.length === 0) return;

  inputNombre.value = "Elvis Enrique Sebastian Cuellar";
});
