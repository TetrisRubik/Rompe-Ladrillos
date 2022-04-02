//* Principal objeto a destruir que deberá ser golpeado por la pelota.

import { detecta_colision } from "./colisiones.js";

export default class Ladrillo {
	constructor(juego, posicion, dureza) {
		//# La imagen a renderizar estará relacionada con la dureza.
		this.imagen = document.getElementById("ladrillo");

		this.juego = juego;

		this.posicion = posicion;
		this.dureza = dureza;

		this.ancho = 78;
		this.alto = 24;

		this.eliminado = false;
	}

	//# Habrá que golpear a un ladrillo tantas veces como dureza tenga para romperlo.
	// Cambia dirección de la pelota y rompe el ladrillo.
	actualiza() {
		if (detecta_colision(this.juego.pelota, this)) {
			this.juego.pelota.velocidad.y = -this.juego.pelota.velocidad.y;

			this.eliminado = true;
		}
	}

	// Renderizado del ladrillo.
	dibuja(ctx) {
		ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y, this.ancho, this.alto);
	}
}