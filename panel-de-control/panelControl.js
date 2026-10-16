const listaTareas = [
  { id: 1, texto: "Aprender HTML", completada: true },
  { id: 2, texto: "Aprender CSS", completada: true },
  { id: 3, texto: "Dominar React", completada: false }
];

const tareasActualizadas=[...listaTareas, { id: 4, texto: "Estudiar APIs", completada: false }];


const tareasNoCompletadas=tareasActualizadas.filter((tarea)=> tarea.completada===false).map(({texto})=>{
    return `<li class='pendiente'>${texto}</li>`;
    
})
console.log(tareasNoCompletadas);
