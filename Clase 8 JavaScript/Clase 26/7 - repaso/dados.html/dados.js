"use strict"
let lanzar = document.getElementById("lanzarDados");
lanzar.addEventListener("click", mostrarResultado);

let caras = new Array (6);
let dado1 = 1;
let dado2 = 0;
let resultado = 0;

function mostrarResultado(){
    let agregarEl =document.getElementById("agregarElemento");
    dado1 = Math.floor(Math.random()*6)+1;
    let pos = dado1 + dado2
    agregarEl.innerHTML=dado1;
    if (pos>1000){
    alert("El juego ha terminado");
    dado2 = 0;
}
 
}

