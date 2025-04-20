
// Ejercicio 7 :: Agregar Elementos a una Lista
// Crear una lista desordenada vacía y un botón. Al hacer click en el botón, agregar un nuevo elemento a la lista con un número que se incremente automáticamente.
// Ejercicio 8 :: Eliminar Elementos de una Lista
// Modificar el ejercicio anterior para que cada elemento generado tenga un botón de "Eliminar" que borre solo ese elemento de la lista.

let contadorElementos = 0;

function agregarElemento() {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = `Elemento número ${++contadorElementos}  <button onclick="this.parentNode.remove()">Quitar este elemento</button>`;
    document.getElementById("lista").appendChild(nuevoElemento);
}
