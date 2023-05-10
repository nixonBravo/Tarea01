/* GENERAR NUMERO ALEATORIO */
function aleatorio() {
    
    let nu = parseInt(document.getElementById("numUsuario").value);

    if (!isNaN(nu) && nu<=10) {
        let ng = Math.floor(Math.random()*11);
        document.getElementById("numGenerado").innerHTML = ng;
        if (nu == ng) {
            document.getElementById("error").style.display = 'none';
            document.getElementById("respuesta").style.display = 'block';
            document.getElementById("respuesta").innerHTML = "ADIVINASTE";
            document.getElementById("numUsuario").value = '';
            
        } else {
            document.getElementById("error").style.display = 'none';
            document.getElementById("respuesta").style.display = 'block';      
            document.getElementById("respuesta").innerHTML = "FALLASTE, VUELVE A INTENTARLO";
            document.getElementById("numUsuario").value = '';
        }       
    } else if(!isNaN(nu) && nu<=11){
        document.getElementById("respuesta").style.display = 'none';
        document.getElementById("error").style.display = 'block';  
        document.getElementById("error").innerHTML = "Solo puede ingresar numeros enteros del 0 al 10";
    }else{
        document.getElementById("respuesta").style.display = 'none';
        document.getElementById("error").style.display = 'block';  
        document.getElementById("error").innerHTML = "No se permiten espacios vacios, letras o caracteres especiales";
    }

}
/* FIN GENERAR NUMERO */
