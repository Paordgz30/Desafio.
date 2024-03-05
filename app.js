// Seleccionar elementos del DOM
var entradaTexto = document.querySelector(".entrada-texto"); // Input de entrada de texto
var salidaTexto = document.querySelector(".salida-texto");   // Input de salida de texto
var seccionTexto1 = document.querySelector(".texto1");      // Sección de texto 1
var seccionTexto2 = document.querySelector(".texto2");      // Sección de texto 2
var btnCopiar = document.querySelector(".copiar");          // Botón de copiar texto

// Función para validar si el texto contiene caracteres válidos
function validar(textoValidar){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var conteo = 0;

    // Iterar sobre el texto a validar
    for(var posicion = 0; posicion < textoValidar.length; posicion++){
        // Iterar sobre las letras válidas
        for(var letra = 0; letra < letras.length;letra++){
            // Si el caracter actual es una letra válida, aumentar el conteo
            if(textoValidar.charAt(posicion) == letras[letra]){
                conteo++;
            }
        }
    }
    // Si no se encontraron letras válidas, el texto es válido
    if(conteo == 0){
        return true;
    }
    return false;
}

// Función para encriptar el texto
function encriptar() {
    var texto = entradaTexto.value; // Obtener el texto de entrada
    var salida = "";

    // Verificar si el texto es válido
    if(!validar(texto)){
        alert("ERROR, verifique su texto.⚠ Favor de colocar Solo letras minúsculas y sin acentos. ⚠");
        return;
    }
 

    // Iterar sobre cada caracter del texto
    for(var posicion = 0; posicion < texto.length; posicion++){
        // Reemplazar caracteres específicos por secuencias encriptadas
        if(texto.charAt(posicion) == "a"){
            salida = salida + "ai";
        }
        else if(texto.charAt(posicion) == "e"){
            salida = salida + "enter";
        }
        else if(texto.charAt(posicion) == "i"){
            salida = salida + "imes";
        }
        else if(texto.charAt(posicion) == "o"){
            salida = salida + "ober";
        }
        else if(texto.charAt(posicion) == "u"){
            salida = salida + "ufat";
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    // Limpiar el input de entrada
    entradaTexto.value = "";
    // Mostrar el texto encriptado en el input de salida
    salidaTexto.value = salida;
    // Ocultar secciones de texto adicionales
    ocultar();
}

// Función para desencriptar el texto
function desencriptar() {
    var texto = entradaTexto.value; // Obtener el texto de entrada
    var salida = "";

    // Verificar si el texto es válido
    if(!validar(texto)){
        alert("Texto inválido, verifique su texto.");
        return;
    }

    // Iterar sobre cada caracter del texto
    for(var posicion = 0; posicion < texto.length; posicion++){
        // Reemplazar secuencias encriptadas por caracteres específicos
        if(texto.charAt(posicion) == "a" && texto.charAt(posicion + 1) == "i"){
            salida = salida + "a";
            posicion = posicion + 1;
        }
        else if(texto.charAt(posicion) == "e" && texto.charAt(posicion + 1) == "n" && texto.charAt(posicion + 2) == "t" && texto.charAt(posicion + 3) == "e" && texto.charAt(posicion + 4) == "r"){
            salida = salida + "e";
            posicion = posicion + 4;
        }
        else if(texto.charAt(posicion) == "i" && texto.charAt(posicion + 1) == "m" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "s"){
            salida = salida + "i";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "o" && texto.charAt(posicion + 1) == "b" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "r"){
            salida = salida + "o";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "u" && texto.charAt(posicion + 1) == "f" && texto.charAt(posicion + 2) == "a" && texto.charAt(posicion + 3) == "t"){
            salida = salida + "u";
            posicion = posicion + 3;
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    // Limpiar el input de entrada
    entradaTexto.value = "";
    // Mostrar el texto desencriptado en el input de salida
    salidaTexto.value = salida;
    // Ocultar secciones de texto adicionales
    ocultar();
}

// Función para ocultar secciones de texto adicionales
function ocultar(){
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "";
}

// Función para mostrar secciones de texto adicionales
function mostrar(){
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    btnCopiar.style.display = "none";
}

// Función para copiar el texto en el portapapeles
function copiar(){
    var copia = salidaTexto.value; // Obtener el texto de salida
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(copia);
    
    // Mostrar un mensaje de confirmación
    var anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    // Ocultar el mensaje de confirmación después de un tiempo y limpiar el texto de salida
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
