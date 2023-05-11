/* GENERAR NUMERO ALEATORIO */



function limpiarInput() {
    document.getElementById("mensaje").innerHTML = "";;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("numero-ingresado").value = "";
    
  }

function generarNumeroAleatorio() {
    var minimo = 1;
    var maximo = 10;
    var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML =numeroAleatorio;

    var numeroIngresado = parseInt(document.getElementById("numero-ingresado").value);
    var mensaje = document.getElementById("mensaje");

    
    if (numeroIngresado === numeroAleatorio) {
        mensaje.innerHTML = "¡Ganaste!";
      } else {
        mensaje.innerHTML = "Perdiste!! ";
      }
      
  }
 
  
  

  