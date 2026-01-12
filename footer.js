const footer = document.getElementById("footerText");

const frases = [
  "© 2026 · Estoy vivo 👀",
  "© 2026 · Observando tus movimientos...",
  "© 2026 · Cargando conciencia artificial 🤖",
  "© 2026 · ¿Ya terminaste tu ticket?",
  "© 2026 · Yo sí compilo a la primera 😎",
  "© 2026 · Sigo aquí...",
  "© 2026 · Respira, todo está bien 😌",
  "© 2026 · Pensando en bugs...",
  "© 2026 · Ejecutando sarcasmo...",
  "© 2026 · Modo espectador activado 👁️",
  "llegaras a fin de mes?"
];

// Cambia texto solo
setInterval(() => {
  const random = Math.floor(Math.random() * frases.length);
  footer.textContent = frases[random];
}, 4000);

// Se mueve ligeramente
setInterval(() => {
  const offset = Math.random() * 10 - 5; // movimiento suave
  footer.style.transform = `translateX(-50%) translateY(${offset}px)`;
}, 3000);

