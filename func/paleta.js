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

	mover_izquierda() {
		this.velocidad = -this.velocidad_max;
	}

	mover_derecha() {
		this.velocidad = this.velocidad_max;
	}

	parar() {
		this.velocidad = 0;
	}

	dibuja(ctx) {
		ctx.fillStyle = "#00f";
		ctx.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto);
	}
	
	actualiza(tiempo_delta) {
		this.posicion.x += this.velocidad;
		if (this.posicion.x < 10) this.posicion.x = 10;
		if (this.posicion.x > 800 - this.ancho - 10) this.posicion.x = 800 - this.ancho - 10;
	}
}