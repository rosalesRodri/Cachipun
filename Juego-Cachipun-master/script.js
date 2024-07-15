
function mostrarName(){
    let nombre= document.querySelector("#nombreUsuario").value;
    document.querySelector("#jugador1Nombre").textContent= nombre;
}

function jugadaBot(jugada){
    const azar =Math.floor(math.random()* 3) + 1;
    const Jbot = document.getElementById("Jbot");
    if(jugada ===1){
        JUsuario.src= "img/piedra.png";
    } else if(jugada===2){
        JUsuario.src= "img/papel.png";
    } else if(jugada===3){
        JUsuario.src= "img/tijera.png";
    }

}


function jugadaUsuario(jugada){
const JUsuario= document.getElementById("JUsuario");
if(jugada ===1){
    JUsuario.src= "img/piedra.png";
} else if(jugada===2){
    JUsuario.src= "img/papel.png";
} else if(jugada===3){
    JUsuario.src= "img/tijera.png";
}

}