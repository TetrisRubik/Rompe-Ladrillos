import { detecta_colision } from "./colisiones.js";

export default class Ladrillo {
	constructor(juego, posicion) {
		this.imagen = document.getElementById("ladrillo");

		this.juego = juego;

		this.posicion = posicion;

		this.ancho = 78;
		this.alto = 24;

		this.eliminado = false;
	}

	actualiza() {
		if (detecta_colision(this.juego.pelota, this)) {
			this.juego.pelota.velocidad.y = -this.juego.pelota.velocidad.y;

			this.eliminado = true;
		}
	}

	dibuja(ctx) {
		ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y, this.ancho, this.alto);
	}
}