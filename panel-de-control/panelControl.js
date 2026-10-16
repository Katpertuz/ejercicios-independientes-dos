"use strict";

const listaTareas = [
  { id: 1, texto: "Aprender HTML", completada: true },
  { id: 2, texto: "Aprender CSS", completada: true },
  { id: 3, texto: "Dominar React", completada: false }
];


const tareasActualizadas = [
  ...listaTareas, 
  { id: 4, texto: "Estudiar APIs", completada: false }
];


const tareasNoCompletadas = tareasActualizadas
  .filter((tarea) => tarea.completada === false)
  .map(({ texto }) => `<li class='pendiente'>${texto}</li>`)
  .join("");


const contenedor = document.querySelector('#lista-pendientes');


if (contenedor) {
  contenedor.innerHTML = tareasNoCompletadas;
} else {console.error("No se encontró el elemento #lista-pendientes en el HTML.");
}
  
