import Paleta from "./objetos/paleta.js";
import Pelota from "./objetos/pelota.js";
import { construir_nivel, nivel1, nivel2, nivel3, nivel4 } from "./niveles.js";
import manejar_entradas from "./entradas.js";

// ¿Se añadirán más estados?
// Estados del juego.
const estado = {
	pausa: 0,
	ejecución: 1,
	menú: 2,
	fin: 3
}

export default class Juego {
	constructor(ancho_juego, alto_juego) {
		this.ancho = ancho_juego;
		this.alto = alto_juego;

		this.estado = estado.menú;

		this.paleta = new Paleta(this);
		this.pelota = new Pelota(this);
		this.objetos = [];
		this.ladrillos = [];
		this.vidas = 3;

		this.niveles = [nivel1, nivel2, nivel3, nivel4];
		this.nivel_actual = 0;

		new manejar_entradas(this.paleta, this);
	}

	// Inicialización de los objetos y el estado del juego.
	comienza() {
		this.ladrillos = construir_nivel(this, this.niveles[this.nivel_actual]);
		this.objetos = [this.paleta, this.pelota];

		this.estado = estado.ejecución;
	}

	// Cambia el estado del juego en función de las vidas, las entradas y los ladrillos, pasando al siguiente estado.
	actualiza(tiempo_delta) {
		if (this.vidas === 0) this.estado = estado.fin;

		if (this.estado === estado.pausa || this.estado === estado.menú || this.estado === estado.fin) return;

		if (this.ladrillos.length === 0) {
			this.nivel_actual++;
			if (this.nivel_actual === 4) {
				this.estado = estado.fin;
			} else {
				this.pelota.reposicionamiento();
				this.comienza();
			}
		}

		[...this.objetos, ...this.ladrillos].forEach((objeto) => objeto.actualiza(tiempo_delta));

		this.ladrillos = this.ladrillos.filter(objeto => !objeto.eliminado);
	}

	//# Optimizar haciendo que solo se rendericen los objetos si son visibles.
	// Renderizado de todos los objetos en función del estado de juego.
	dibuja(ctx) {
		[...this.objetos, ...this.ladrillos].forEach((objeto) => objeto.dibuja(ctx));

		// Pausa.
		if (this.estado === estado.pausa) {
			ctx.rect(0, 0, this.ancho, this.alto);
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Pausa", this.ancho / 2, this.alto / 2);
		}

		// Menú.
		if (this.estado === estado.menú) {
			ctx.rect(0, 0, this.ancho, this.alto);
			ctx.fillStyle = "rgba(0, 0, 0, 1)";
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Presiona ESPACIO para empezar", this.ancho / 2, this.alto / 2);
		}

		// Fin.
		if (this.estado === estado.fin) {
			ctx.rect(0, 0, this.ancho, this.alto);
			ctx.fillStyle = "rgba(0, 0, 0, 1)";
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Fin del Juego", this.ancho / 2, this.alto / 2);
		}
	}

	// Cambia de ejecución a pausa y viceversa.
	cambiar_pausa() {
		if (this.estado == estado.pausa) {
			this.estado = estado.ejecución;
		} else {
			this.estado = estado.pausa;
		}
	}
}