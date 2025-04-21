
// Ejercicio 1 :: Filtrar Números Pares
// Crear una función que reciba un array con números del 0 al 10, y devuelva un nuevo array que contenga solo los números pares.
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function obtenerNumerosPares(numeros) {
    let numerosPares = [];

    numeros.forEach(function(num) {
        if (num % 2 == 0) {
            numerosPares.push(num);
        }
    });
    return numerosPares;
}

let soloPares = obtenerNumerosPares(numeros);
let respuesta = `Del array original: [${numeros}], obtenemos los numeros pares: ${soloPares}`;

function mostrarEjercicio1() {
    let divEjercicio1 = document.getElementById("divEj-01");
    let parrafoEjercicio1 = document.createElement("p");
    parrafoEjercicio1.textContent = respuesta;
    divEjercicio1.appendChild(parrafoEjercicio1);

    // Deshabilito el botón para no seguir escribiendo lineas repetidas
    let btnEjercicio1 = document.getElementById("btnEj-01");
    btnEjercicio1.disabled = true;
}

console.log("-----  EJERCICIO 1  -----");
console.log(respuesta);
console.log("\n");

