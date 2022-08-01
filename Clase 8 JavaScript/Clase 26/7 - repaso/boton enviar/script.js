"use strict"; //se usa para evitar errores en archivos JS
let nombre = document.getElementById("nombre");
nombre.addEventListener("click", mostrar);

function mostrar() {
    let textoActual = document.getElementById("nombre");
    textoActual = nombre.value;
    console.log(nombre);
} 
