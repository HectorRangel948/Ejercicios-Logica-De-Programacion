

var contenido = document.querySelector(".contenido");
var resultadoTexto = document.createElement("h2");
var resultado;

var dato1 = prompt("Ingrese el primer número");
var dato2 = prompt("Ingrese el segundo número");
var dato3 = prompt("Ingrese el tercer número");

dato1 = parseInt(dato1);
dato2 = parseInt(dato2);
dato3 = parseInt(dato3);

var datos = [dato1, dato2, dato3];

function compararNumeros(a,b){
    return a-b;
}

resultado = datos.sort(compararNumeros);

resultadoTexto.innerHTML=("Menor a mayor " + resultado + " Mayor a menor " + resultado.reverse());
contenido.appendChild(resultadoTexto);