//* Objeto cinético que colisiona con todo.

import { detecta_colision } from "./colisiones.js";

export default class Pelota {
	constructor(juego) {
		this.imagen = document.getElementById("pelota");

		this.ancho_juego = juego.ancho;
		this.alto_juego = juego.alto;

		this.juego = juego;

		this.posicion = {
			x: this.ancho_juego / 2,
			y: this.alto_juego * 2 / 3
		}

		this.velocidad = {
			x: 3,
			y: -3
		}

		this.tamaño = 20;
	}

	// Posicionar la pelota cuando se pierde.
	reposicionamiento() {
		this.posicion = {
			x: this.ancho_juego / 2,
			y: this.alto_juego * 2 / 3
		}

		this.velocidad.y = -3;
	}

	// Renderizado de la pelota.
	dibuja(ctx) {
		ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y, this.tamaño, this.tamaño);
	}

	// Movimiento de la pelota y detección de colisiones con el ambiente.
	actualiza() {
		this.posicion.x += this.velocidad.x;
		this.posicion.y += this.velocidad.y;

		// Colisiones horizontales y verticales.
		if (this.posicion.x + this.tamaño > this.ancho_juego || this.posicion.x < 0) {
			this.velocidad.x = -this.velocidad.x;
		}
		if (this.posicion.y < 0) {
			this.velocidad.y = -this.velocidad.y;
		}

		// La pelota se escapa.
		if (this.posicion.y + this.tamaño > this.alto_juego) {
			this.juego.vidas--;
			this.reposicionamiento();
		}

		// Colisiones con la paleta.
		if (detecta_colision(this, this.juego.paleta)) {
			this.velocidad.y = -this.velocidad.y;
			this.posicion.y = this.juego.paleta.posicion.y - this.tamaño;
		}
	}
}