
// Ejercicio 4 :: Operación con Callback
// Crear una función que reciba un callback y dos números, aplique el callback y devuelva el resultado. Implementar al menos dos callbacks diferentes.

function operar(num1, num2, callback) {
    return callback(num1, num2);
}

const sumar = (num1, num2) => num1 + num2;
const multiplicar = (num1, num2) => num1 * num2;

let resultadoSuma = `La suma de 5 y 10 es: ${operar(5, 10, sumar)}`;
let resultadoMultiplicacion = `La multiplicacion de 5 y 10 es: ${operar(5, 10, multiplicar)}`;

function mostrarEjercicio4() {
    let divEjercicio4 = document.getElementById("divEj-04");
    let parrafo = document.createElement("p");
    parrafo.textContent = resultadoSuma;
    divEjercicio4.appendChild(parrafo);
    
    parrafo = document.createElement("p");
    parrafo.textContent = resultadoMultiplicacion;
    divEjercicio4.appendChild(parrafo);

    // Deshabilito el botón para no seguir escribiendo lineas repetidas
    let btnEjercicio4 = document.getElementById("btnEj-04");
    btnEjercicio4.disabled = true;
}

console.log("-----  EJERCICIO 4  -----");
console.log(resultadoSuma);
console.log(resultadoMultiplicacion);
console.log("\n");

