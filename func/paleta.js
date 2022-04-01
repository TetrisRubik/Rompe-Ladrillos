//* Paleta dirigida lateralmente por el jugador.

export default class Paleta {
	constructor(juego) {
		this.ancho_juego = juego.ancho;
		this.alto_juego = juego.alto;

		this.ancho = 150;
		this.alto = 25;

		this.velocidad_max = 6.5;
		this.velocidad = 0;

		this.posicion = {
			x: this.ancho_juego / 2 - this.ancho / 2,
			y: this.alto_juego - this.alto - 10
		}
	}

	// Movimientos laterales.
	mover_izquierda() {
		this.velocidad = -this.velocidad_max;
	}

	mover_derecha() {
		this.velocidad = this.velocidad_max;
	}

	//# Modificar función para que siga en la otra dirección si anteriormente pulsaste el botón contrario.
	// Para de mover la paleta.
	parar() {
		this.velocidad = 0;
	}

	//? Se cambiará a una imagen más que un cuadrado.
	// Renderiza la paleta.
	dibuja(ctx) {
		ctx.fillStyle = "#00f";
		ctx.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto);
	}

	// Calcula la posición de la paleta en movimiento.
	actualiza() {
		this.posicion.x += this.velocidad;
		if (this.posicion.x < 10) this.posicion.x = 10;
		if (this.posicion.x > 800 - this.ancho - 10) this.posicion.x = 800 - this.ancho - 10;
	}
}