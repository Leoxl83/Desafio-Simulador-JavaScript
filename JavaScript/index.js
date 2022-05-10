//Juego preguntas

let respuesta = "URUGUAY"; 	 	 
let acierto = false; 	 	 
let contador = 0;	

alert (`¡Bienvenido!
Tenes 3 intentos para adivinar de que país soy`)

function juego(){

while (contador <3 && acierto === false) {	 	 
    let respuestaJugador = prompt("Ingrese un País: ");	 

    if (respuestaJugador.toUpperCase() === respuesta) { 	 	 
    let acierto = true; 	 	 
    alert("¡Ganasteeee! ¡Saludos!");	 
    end;
}	 	 
else {
    alert ("¡Noo! Segui participando...")
}
 contador++;	 	 
}	 	 
if (contador === 3) {
    alert("Esa fue tu ultima oportunidad. ¡Suerte la proxima!")
}	 
}

juego();