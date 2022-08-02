"use strict"
let botonLista = document.getElementById("botonLista");
let lista = document.getElementById("lista");
let inputLista = document.getElementById("inputLista");

//Esta funcion agrega un elemento nuevo a la lista//
function agregarElemento(){
let elemento = document.createElement("li");
elemento.innerHTML = inputLista.value;
lista.appendChild(elemento);
}

//aca empieza el div parrafo//
let botonParrafo = document.getElementById("botonParrafo");

//Esta funcion agrega un nuevo elemento al parrafo//
function agregarParrafo(){
    let divParrafo = document.getElementById("divParrafo");
    let parrafo = document.createElement("p");
    let inputParrafo = document.getElementById("inputParrafo");
    parrafo.innerHTML = inputParrafo.value;
    divParrafo.appendChild(parrafo);
}
