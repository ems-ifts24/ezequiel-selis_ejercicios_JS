
// Ejercicio 5 :: Contador con Botones
// Crear un botón para incrementar y otro para decrementar un contador mostrado en un elemento div. Actualizar el texto del div al hacer click.

let contador = 0;

const ActualizarContador = () => document.getElementById("contador").innerHTML = contador;

const sumar = () => {
    contador ++;
    ActualizarContador();
};

const restar = () => {
    contador --;
    ActualizarContador();    
}

const reinicio = () => {
    contador = 0;
    ActualizarContador();
}

document.getElementById("btnSuma").addEventListener("click", sumar);
document.getElementById("btnResta").addEventListener("click", restar);
document.getElementById("btnReset").addEventListener("click", reinicio);

document.getElementById("contador").innerHTML = contador;