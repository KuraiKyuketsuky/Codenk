const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

//Keys para el proceso de encriptado:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
//No se aceptan números
//No se aceptan caracteres especiales


//Funcionalidad del botón "Encriptar"

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

//Función que permite encriptar el texto. Descarta caracteres especiales y números

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"],[0,""],[1,""],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""],[8,""],[9,""],["`",""],["~",""],["!",""],["@",""],["#",""],["$",""],["%",""],["^",""],["&",""],["*",""],["(",""],[")",""],["_",""],["|",""],["+",""],["-",""],["=",""],["?",""],[";",""],[":",""],[".",""],["<",""],[">",""],["{",""],["}",""],["[",""],["]",""],[",",""],["¡",""],["¿",""],["/",""],["á","ai"], ["é","enter"],["í","imes"],["ó","ober"],["ú","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    var validarNumero = stringEncriptada;
    let caracteresEspeciales = [["`"],["~"],["!"],["@"],["#"],["$"],["%"],["^"],["&"],["*"],["("],[")"],["_"],["|"],["+"],["-"],["="],["?"],[";"],[":"],["."],["<"],[">"],["{"],["}"],["["],["]"],[","],["¡"],["¿"],["/"],["á"],["é"],["í"],["ó"],["ú"]]; 

    for (let i = 0; i < caracteresEspeciales.length; i++){
        if(stringEncriptada.includes(caracteresEspeciales[i][0])){
            alert ("El encriptador no acepta caracteres especiales. Si ingresó una vocal con tilde, ésta será reemplazada por la vocal sin tilde para ser encriptada");
            break;
        }
    }
       
    if (isNaN(validarNumero) == false){
        
        for (let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
               stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        alert ("El encriptador no acepta datos numéricos. Por favor inténtelo nuevamente");
    }
    else{
        for (let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
    }
    return stringEncriptada;
}

//Funcionalidad del botón "Desencriptar"

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

//Función que permite desencriptar el texto que fue encriptado anteriormente.

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

//Función que permite copiar el texto mostrado en "Mensaje"

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("texto copiado");
}