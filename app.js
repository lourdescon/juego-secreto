let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    //query selector es método que permite acceder a cada uno de los elementos
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
    
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto === numeroUsuario);
    console.log (intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','Numero secreto es menor');

        }else{
            asignarTextoElemento('p','Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1 ;

     if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        listaNumerosSorteados = [];


    }else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
           return generarNumeroSecreto();
    
        }else{
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
    
    
        }
    }

    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    
    //Inicializar el numero de intentos
    intentos = 1;

}


function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();