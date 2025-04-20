
// Ejercicio 3 :: Imprimir con Retraso
// Usar una función flecha y setTimeout para imprimir cada elemento de un array con un retraso de 1 segundo por elemento.
const arrayFrutas = ["manzana", "banana", "naranja", "pera", "uva", "kiwi"];
console.log("-----  EJERCICIO 3  -----");
console.log(`Imprimiendo, cada un segundo, los ${arrayFrutas.length} registros del array de frutas`);

// Tuve que agregar el index del foreach porque sino me imprimía todas las frutas juntas despues de 1 segundo
arrayFrutas.forEach((fruta, index) => 
    setTimeout(() => {
        console.log(fruta);
    }, 1000 * index)
);
