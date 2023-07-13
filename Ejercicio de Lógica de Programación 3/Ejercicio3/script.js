var input = parseInt(prompt("Ingrese un número"));
var contenido = document.querySelector(".contenido");

function factorial(input){
    let respuesta=1;
    for(i=input;i>0;i--){
        respuesta = respuesta*(i);
    }
    
    var h2 = document.createElement("h2");
    h2.innerHTML = "El factorial de " + input + " es: " + respuesta;
    contenido.appendChild(h2);
}

factorial(input);