
var input = prompt("Ingrese una frase");
var fraseFinal;


const contenido = document.querySelector(".contenido");

fraseFinal = separarFrase(input);
fraseFinal = fraseFinal.reverse();


function separarFrase(input){
    respuesta=[];
    for(i=0; i<input.length;i++){
        respuesta[i]=input[i];
    }
    return respuesta;
}

var h2 = document.createElement("h2");
h2.innerHTML = fraseFinal.join('');
contenido.appendChild(h2);