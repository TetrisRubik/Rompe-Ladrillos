import Ladrillo from "./ladrillo.js";

export function construir_nivel(juego, nivel) {
	let ladrillos = [];

	nivel.forEach((fila, indice_fila) => {
		fila.forEach((ladrillo, indice_ladrillo) => {
			if (ladrillo === 1) {
				let posicion = {
					x: 80 * indice_ladrillo,
					y: 80 + 26 * indice_fila
				};
				ladrillos.push(new Ladrillo(juego, posicion));
			}
		});
	});

	return ladrillos;
}

export const nivel1 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const nivel2 = [
	[0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const nivel3 = [
	[0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const nivel4 = [
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
];