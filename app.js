let historial = [];
let index = -1;
let vacio = true;

function crear(){
  let idc = idcall.value.trim();
  const rqv = rq.value.trim();
  const i = idi.value;
  const f = idf.value;

  // Validar solo los obligatorios
  if(!rqv || !i || !f){
    alert("Completa RQ, ID Inicio y ID Final");
    return;
  }

  if(!idc) idc = "—";

  const texto =
`ID-Call: ${idc}
RQ: ${rqv}
ID I: ${i}
ID F: ${f}`;

  historial.push(texto);
  index = historial.length - 1;
  vacio = false;

  out.value = texto;
  mostrarEstado("Plantilla creada ✔");
}

function copiar(){
  if(!out.value) return;
  out.select();
  document.execCommand("copy");
  mostrarEstado("Copiado al portapapeles ✔");
}

function borrar(){
  idcall.value = "";
  rq.value = "";
  idi.value = "";
  idf.value = "";
  out.value = "";
  vacio = true;
  mostrarEstado("Formulario limpio");
}

function anterior(){
  if(historial.length === 0) return;

  if(vacio){
    index = historial.length - 1;
    vacio = false;
  } else if(index > 0){
    index--;
  }

  out.value = historial[index];
  mostrarEstado("Plantilla anterior");
}

function siguiente(){
  if(historial.length === 0 || vacio) return;

  if(index < historial.length - 1){
    index++;
    out.value = historial[index];
    mostrarEstado("Plantilla actual");
  }
}

function mostrarEstado(msg){
  const s = document.getElementById("status");
  s.innerText = msg;
  s.style.opacity = 1;
  setTimeout(()=>s.style.opacity=0,2000);
}
