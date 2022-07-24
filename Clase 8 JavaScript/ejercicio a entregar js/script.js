"use strict";
let btn_nombre = document.getElementById("btn-nombre");
btn_nombre.addEventListener("click",mostrar);
function mostrar(){
    let nombre = "anonimo";
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;
    alert("Bienvenid@ " + nombre);
}