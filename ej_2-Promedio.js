
// Ejercicio 2 :: Calcular Promedio
// Escribir una función que tome un array de números y calcule el promedio.
const numParaPromediar = [5, 8, 12, 4, 9, 7, 6, 10, 15, 3, 11];
function calcularPromedios(numParaPromediar) {
    if (numParaPromediar.length == 0)
        return 0;

    let suma = 0;
    numParaPromediar.forEach(num => suma+=num);
    
    return suma / numParaPromediar.length;
}

let promedios = calcularPromedios(numParaPromediar);
let respuesta2 = `Del array original: [${numParaPromediar}], obtenemos el promedio (con 3 decimales): ${promedios.toFixed(3)}`;

function mostrarEjercicio2() {
    let divEjercicio2 = document.getElementById("divEj-02");
    let parrafoEjercicio2 = document.createElement("p");
    parrafoEjercicio2.textContent = respuesta2;
    divEjercicio2.appendChild(parrafoEjercicio2);

    // Deshabilito el botón para no seguir escribiendo lineas repetidas
    let btnEjercicio2 = document.getElementById("btnEj-02");
    btnEjercicio2.disabled = true;
}

console.log("-----  EJERCICIO 2  -----");
console.log(respuesta2);
console.log("\n");
