"use strict"; //se usa para evitar errores en archivos JS
let contador = 0;
let botonContar = document.getElementById("botonContar");
botonContar.addEventListener("click",contar);
let botonMostrar = document.getElementById("botonClicks"); //Para obtener el elemento
botonMostrar.addEventListener("click",cantidadDeClicks); //para esperar el elemento
let nombre = document.getElementById("mostrarTexto"); //Para obtener el elemento
nombre.addEventListener("input", mostrarConsola); //para esperar el elemento


function contar(){
    contador ++;
    console.log(contador);
}
function cantidadDeClicks(){
    alert(contador);
}


function mostrarConsola(){
    console.log(nombre.value);
}