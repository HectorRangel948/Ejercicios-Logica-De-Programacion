var input = parseInt(prompt("Ingrese un número"));

const contenido = document.querySelector(".contenido");

function serie(input){
    respuesta=[];
    suma=0;
    for(i=0; i<input;i++){
        if(i<2){
            respuesta.push(i);
        }
        else{
            suma=respuesta[i-2]+respuesta[i-1];
            respuesta.push(suma);
        }
    }

    var h2 = document.createElement("h2");
    h2.innerHTML = "Serie fibonaci de "+ input + " digitos " + respuesta;
    contenido.appendChild(h2)
}

serie(input);