function generarDetalle(){
  const linea = document.getElementById("linea").value;
  const ruc = document.getElementById("ruc").value;
  const cuenta = document.getElementById("cuenta").value;
  const email = document.getElementById("email").value;
  const costo = document.getElementById("costo").value;

  const texto = `Su apoyo con la e-SIM:

LINEA: ${linea}
RUC: ${ruc}
CUENTA: ${cuenta}
E-MAIL: ${email}
CON COSTO: ${costo}`;

  document.getElementById("detalleFinal").value = texto;
}

function copiarDetalle(){
  const texto = document.getElementById("detalleFinal");
  texto.select();
  document.execCommand("copy");
  alert("Detalle copiado 📋");
}
