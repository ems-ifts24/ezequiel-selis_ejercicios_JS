
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

console.log("-----  EJERCICIO 1  -----");
console.log(`Del array original: [${numeros}], obtenemos los numeros pares: ${soloPares}`);
console.log("\n");

