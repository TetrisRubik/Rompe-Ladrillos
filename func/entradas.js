export default class manejar_entradas {
	constructor(paleta, juego) {
		document.addEventListener('keydown', (event) => {
			switch (event.key) {
				case "ArrowLeft":
				case "a":
					paleta.mover_izquierda();
					break;
				case "ArrowRight":
				case "d":
					paleta.mover_derecha();
					break;
				case "p":
					juego.cambiar_pausa();
					break;
				case " ":
					if (juego.estado == 2) {
						juego.comienza()
					}
					break;
			}
		})

		document.addEventListener('keyup', (event) => {
			switch (event.key) {
				case "ArrowLeft":
				case "a":
					if (paleta.velocidad < 0)
						paleta.parar();
					break;
				case "ArrowRight":
				case "d":
					if (paleta.velocidad > 0)
						paleta.parar();
					break;
			}
		})
	}
}