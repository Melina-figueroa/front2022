"use strict";
let btn_enviar = document.getElementById("btn_enviar");
btn_enviar.addEventListener("click",mostrar);

function mostrar(){
    let nombre = "anonimo";
    let inputNombre = document.getElementById("inputNombre");

    let apellido = "anonimo";
    let inputApellido = document.getElementById("inputApellido");

    let edad = "anonimo";
    let inputEdad = document.getElementById("inputEdad");

    nombre = inputNombre.value;
    apellido = inputApellido.value;
    edad = inputEdad.value;
    alert("Bienvenid@ " + nombre + " " + apellido+ " " + edad+" años");
} 
