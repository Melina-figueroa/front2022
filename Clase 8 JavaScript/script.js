"use strict"; //se usa para evitar errores en archivos JS
let contador = 0;
let btn_contar = document.getElementById("btn-contar");
btn_contar.addEventListener("click",contar);
let btn_mostrar = document.getElementById("btn-clicks"); //Para obtener el elemento
btn_mostrar.addEventListener("click",cantidadDeClicks); //para esperar el elemento

function cantidadDeClicks(){
    alert(contador);
}

function contar(){
    contador ++;
    console.log(contador);
}
