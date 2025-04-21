
// Ejercicio 3 :: Imprimir con Retraso
// Usar una función flecha y setTimeout para imprimir cada elemento de un array con un retraso de 1 segundo por elemento.
const arrayFrutas = ["manzana", "banana", "naranja", "pera", "uva", "kiwi"];

function mostrarFrutas() {
    // Tuve que agregar el index del foreach porque sino me imprimía todas las frutas juntas despues de 1 segundo
    arrayFrutas.forEach((fruta, index) => 
        setTimeout(() => {
            console.log(fruta);
        }, 1000 * index)
    );    
};

function mostrarEjercicio3() {
    let divEjercicio3 = document.getElementById("divEj-03");
    let ul = document.createElement("ul");
    divEjercicio3.appendChild(ul);

    arrayFrutas.forEach((fruta, index) => {
        setTimeout(() => {
            const li = document.createElement("li");
            li.innerHTML = fruta;
            ul.appendChild(li);
            
        }, 500 * index)
    });

    // Deshabilito el botón para no agregar listas repetidas
    let btnEjercicio3 = document.getElementById("btnEj-03");
    btnEjercicio3.disabled = true;
}



console.log("-----  EJERCICIO 3  -----");
console.log(`Imprimiendo, cada un segundo, los ${arrayFrutas.length} registros del array de frutas`);
mostrarFrutas();