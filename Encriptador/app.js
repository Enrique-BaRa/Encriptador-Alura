
let booleanoDeControl = false;

function encriptando(){

    let textoUsuario = document.getElementById('texto-usuario').value;

    let respuestaValidadcion = validarTexto(textoUsuario);

    let respuestaValidacionTextoVacio = validacionTextoVacio(textoUsuario);

    if(respuestaValidadcion === true && respuestaValidacionTextoVacio === false){

        textoUsuario = encriptacion(textoUsuario);
    
        mostrarResultado(textoUsuario);
    
        document.getElementById('texto-usuario').value = "";


    }else{

        cargarMensajeDeError();

    };

    return;
};

function validarTexto(texto){

    let caracteresValidos = /^[a-z\s]/;
    let respuesta = true;

    for(let i=0; i<texto.length; i++){

        if(caracteresValidos.test(texto[i]) === false){
            respuesta = false;
            break;
        };
    };

    return respuesta;
};

function validacionTextoVacio(texto){

    let respuesta = false;

    if(texto.trim() === ''){
        respuesta = true;
    };

    return respuesta;
};

function encriptacion(texto){

    let tabla = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(let i=0; i<tabla.length; i++){
        
        if(texto.includes(tabla[i][0])){
            texto = texto.replaceAll(tabla[i][0],tabla[i][1]);
        };
    };

    return texto;
};

function desencriptando(){

    let textoUsuario = document.getElementById('texto-usuario').value;

    let respuestaValidadcion = validarTexto(textoUsuario);

    let respuestaValidacionTextoVacio = validacionTextoVacio(textoUsuario);

    if(respuestaValidadcion === true && respuestaValidacionTextoVacio === false){

        textoUsuario = desencriptar(textoUsuario);
    
        mostrarResultado(textoUsuario);

        document.getElementById('texto-usuario').value = "";


    }else{

        cargarMensajeDeError();

    }

    return;
};

function desencriptar(texto){

    let tabla = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(let i=0; i<tabla.length; i++){
        
        if(texto.includes(tabla[i][1])){
            texto = texto.replaceAll(tabla[i][1],tabla[i][0]);
        };
    };

    return texto;
}

function limpiarSeccionResultado(){
    let aux = document.querySelector('.contenedor-main-resultado-previo');
    aux.style.display = "none";
    return;
};

function mostrarResultado(texto){

    limpiarSeccionResultado();
    document.querySelector('.contenedor-main-resultado-final').style.display = "flex";
    let aux = document.querySelector('.texto-final');
    aux.innerHTML = texto;

    return;
};

function cargarMensajeDeError(){

    document.querySelector('.contenedor-main-resultado-final').style.display = "none";
    document.querySelector('.contenedor-main-resultado-previo').style.display = "flex";
    //document.querySelector(".imagen-resultado").src = "./assets/segundaImagenEditada.png";
    document.querySelector('.imagen-resultado').style.display = "none";
    document.querySelector('.imagen-error').style.display = "flex";

    let mediaqueryList = window.matchMedia("(max-width: 768px)");
    if(mediaqueryList.matches === true) {
        document.querySelector('.imagen-error').style.display = "none";
    }

    let subTitulo = document.querySelector('.resultado-subtitulo');
    subTitulo.innerHTML = 'Ocurrió un problema';
    subTitulo.style.color = "#F93005"

    document.querySelector('.resultado-texto').innerHTML = "No puedo encriptarlo, solo en minúsculas y sin acentos, por favor.";
    document.querySelector('.resultado-texto').style.color = "#fa7a02";

    let elementoHTML = document.getElementById('texto-informativo');
    elementoHTML.innerHTML = 'Solamente letras minúsculas, sin símbolos o acentos.';
    elementoHTML.style.color = "#F93005";
    booleanoDeControl = true;

    return;
};

function copiando(){

    let texto = document.querySelector('.texto-final').textContent;
    
    navigator.clipboard.writeText(texto);

    document.querySelector('.boton-copiar').innerHTML = "Mensaje Copiado";

    setTimeout(() => {
        document.querySelector('.boton-copiar').innerHTML = "Copiar";
    }, 1000);

    return;
}