
// Ejercicio 6 :: Cambiar Texto de Párrafos
// Seleccionar todos los elementos p de la página y cambiar su texto al hacerclick en un botón.

const parrafos = document.querySelectorAll("p");

const cambiarTexto = () => parrafos.forEach((parrafo, index) => parrafo.innerHTML = `Este es el párrafo número ${index + 1} y su contenido original fue modificado`);

document.getElementById("btnCambiar").addEventListener("click", cambiarTexto);