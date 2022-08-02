"use strict"
let lanzar = document.getElementById("lanzarDados");
lanzar.addEventListener("click", mostrarResultado);

let caras = new Array (6);
let dado1 = new Array(caras);
let dado2 = new Array(caras);
let resultado = 0;
function mostrarResultado(){
    for (let i = 0; i < caras.length; i++) {
          caras[i] = dado1+dado2;  
    }
    alert(caras);
}

function azar(min, max){        // Math.floor(Math.ramdom()* ((max-min)+min))
        return Math.floor(Math.random() * max - min) + min;
}

 


