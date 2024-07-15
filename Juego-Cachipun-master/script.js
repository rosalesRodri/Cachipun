
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

jugadaBot();
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

}


function puntaje(u,b){
    let empates=0;
    if((u==1 && b==1) || (u==2 && b==2) ||(u==3 && b==3)  ){
        empates++;
        document.querySelector('#ptsEmpates').textContent=empates;
        }

}



