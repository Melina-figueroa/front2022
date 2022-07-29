let div1 = document.getElementById("div");
let nuevoElemento = document.createElement ("ul");
nuevoElemento.innerHTML = div1.value;
div1.appendChild(nuevoElemento);