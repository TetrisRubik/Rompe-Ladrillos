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

	reposicionamiento() {
		this.posicion = {
			x: this.ancho_juego / 2,
			y: this.alto_juego * 2 / 3
		}

		this.velocidad.y = -3;
	}

	dibuja(ctx) {
		ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y, this.tamaño, this.tamaño);
	}

	actualiza(tiempo_delta) {
		this.posicion.x += this.velocidad.x;
		this.posicion.y += this.velocidad.y;

		// Colisiones horizontales y verticales
		if (this.posicion.x + this.tamaño > this.ancho_juego || this.posicion.x < 0) {
			this.velocidad.x = -this.velocidad.x;
		}
		if (this.posicion.y < 0) {
			this.velocidad.y = -this.velocidad.y;
		}
		if (this.posicion.y + this.tamaño > this.alto_juego) {
			this.juego.vidas--;
			this.reposicionamiento();
		}

		// Colisiones con paleta
		if (detecta_colision(this, this.juego.paleta)) {
			this.velocidad.y = -this.velocidad.y;
			this.posicion.y = this.juego.paleta.posicion.y - this.tamaño;
		}
	}
}