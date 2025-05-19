const frases = {
  lunes: "¡Hoy es un gran día para empujar tus límites!",
  martes: "¡No pares hasta sentir el ardor!",
  miercoles: "¡Fuerza en las piernas, poder en el cuerpo!",
  jueves: "¡Hombros arriba, motivación también!",
  viernes: "¡Termina fuerte la semana!"
};

const rutinas = {
  lunes: [
    { nombre: "Press de banca", video: "https://www.youtube.com/watch?v=gRVjAtPip0Y" },
    { nombre: "Press inclinado", video: "https://www.youtube.com/watch?v=SrqOu55lrYU" },
    { nombre: "Aperturas con mancuernas", video: "https://www.youtube.com/watch?v=eozdVDA78K0" }
  ],
  martes: [
    { nombre: "Remo con barra", video: "https://www.youtube.com/watch?v=roCP6wCXPqo" },
    { nombre: "Jalón al pecho", video: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
    { nombre: "Abdominales 10 min", video: "https://www.youtube.com/watch?v=1919eTCoESo" }
  ],
  miercoles: [
    { nombre: "Sentadillas", video: "https://www.youtube.com/watch?v=Dy28eq2PjcM" },
    { nombre: "Prensa", video: "https://www.youtube.com/watch?v=IZxyjW7MPJQ" },
    { nombre: "Peso muerto", video: "https://www.youtube.com/watch?v=ytGaGIn3SjE" }
  ],
  jueves: [
    { nombre: "Press militar", video: "https://www.youtube.com/watch?v=B-aVuyhvLHU" },
    { nombre: "Elevaciones laterales", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
    { nombre: "Abdominales 15 min", video: "https://www.youtube.com/watch?v=2pLT-olgUJs" }
  ],
  viernes: [
    { nombre: "Curl bíceps", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
    { nombre: "Fondos triceps", video: "https://www.youtube.com/watch?v=0326dy_-CzM" },
    { nombre: "Curl martillo", video: "https://www.youtube.com/watch?v=zC3nLlEvin4" }
  ]
};

const fraseEl = document.getElementById("frase");
const mainView = document.getElementById("main-view");
const rutinaView = document.getElementById("rutina-view");
const diaTitulo = document.getElementById("dia-titulo");
const ejerciciosEl = document.getElementById("ejercicios");

function verRutina(dia) {
  mainView.classList.add("oculto");
  rutinaView.classList.remove("oculto");

  diaTitulo.textContent = dia.charAt(0).toUpperCase() + dia.slice(1);
  fraseEl.textContent = frases[dia];
  ejerciciosEl.innerHTML = "";

  rutinas[dia].forEach(ej => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>👉 ${ej.nombre}</p>
      <a href="${ej.video}" target="_blank">📺 Ver Video</a>
    `;
    ejerciciosEl.appendChild(div);
  });

  if (localStorage.getItem(dia) === "completado") {
    diaTitulo.classList.add("completado");
  } else {
    diaTitulo.classList.remove("completado");
  }
}

function volver() {
  rutinaView.classList.add("oculto");
  mainView.classList.remove("oculto");
}

function marcarCompletado() {
  const dia = diaTitulo.textContent.toLowerCase();
  localStorage.setItem(dia, "completado");
  alert("¡Bien hecho! Día marcado como completado.");
  diaTitulo.classList.add("completado");
}

document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("claro");
});
