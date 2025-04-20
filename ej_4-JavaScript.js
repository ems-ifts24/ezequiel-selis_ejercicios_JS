
// Ejercicio 4 :: Operación con Callback
// Crear una función que reciba un callback y dos números, aplique el callback y devuelva el resultado. Implementar al menos dos callbacks diferentes.

function operar(num1, num2, callback) {
    return callback(num1, num2);
}

const sumar = (num1, num2) => num1 + num2;
const multiplicar = (num1, num2) => num1 * num2;

let resultadoSuma = operar(5, 10, sumar);
let resultadoMultiplicacion = operar(5, 10, multiplicar);

console.log("-----  EJERCICIO 4  -----");
console.log(`La suma de 5 y 10 es: ${resultadoSuma}`);
console.log(`La multiplicacion de 5 y 10 es: ${resultadoMultiplicacion}`);
console.log("\n");

