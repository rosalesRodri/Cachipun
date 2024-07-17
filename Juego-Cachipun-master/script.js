let empates=0;
let puntosB=0;
let puntosU=0;

function mostrarName(){
    let nombre= document.querySelector("#nombreUsuario").value;
    document.querySelector("#jugador1Nombre").textContent= nombre;
}




function jugadaUsuario(jugada){
let Usuario= document.getElementById("JUsuario");
if(jugada ==1){
    Usuario.src= "img/piedra.png";
} else if(jugada==2){
    Usuario.src= "img/papel.png";
} else if(jugada==3){
    Usuario.src = "img/tijera.png";
}

let jb=jugadaBot();
puntaje(jugada,jb)


}

function jugadaBot(){
    let azar =Math.floor(Math.random()* 3) + 1;
    
    if(azar ==1){
        document.querySelector('#Jbot').src= "img/piedra.png";
    } else if(azar==2){
        document.querySelector('#Jbot').src= "img/papel.png";
    } else if(azar==3){
        document.querySelector('#Jbot').src= "img/tijera.png";
    }
return azar;
}


function puntaje(u,b){

    if((u==1 && b==1) || (u==2 && b==2) ||(u==3 && b==3)  ){
        empates++;
        document.querySelector('#ptsEmpates').textContent=empates;
        }

    if((u==1 && b==2) || (u==2 && b==3) ||(u==3 && b==1 )){
        puntosB++;
        document.querySelector('#ptsJugador2').textContent=puntosB;
    }
    if((u==2 && b==1 )|| (u==3 && b==2 )||(u==1 && b==3 )){
        puntosU++;
        document.querySelector('#ptsJugador1').textContent=puntosU;
    }

}

function reiniciar(){
empates=0;
puntosU=0;
puntosB=0;
    document.querySelector('#ptsEmpates').textContent=empates;
    document.querySelector('#ptsJugador1').textContent=puntosU;
    document.querySelector('#ptsJugador2').textContent=puntosB;

}

