import Juego from "./juego.js";

let lienzo = document.getElementById("pantalla_juego");
let ctx = lienzo.getContext("2d");

const ancho_juego = 800;
const alto_juego = 600;

let juego = new Juego(ancho_juego, alto_juego);

let ultima_tiempo = 0;

// Bucle de juego donde se renderiza y actualiza todo.
function bucle_juego(tiempo_actual) {
	let tiempo_delta = tiempo_actual - ultima_tiempo;
	ultima_tiempo = tiempo_actual;

	ctx.clearRect(0, 0, ancho_juego, alto_juego);

	juego.actualiza(tiempo_delta);
	juego.dibuja(ctx);

	requestAnimationFrame(bucle_juego);
}

bucle_juego();