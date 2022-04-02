//* Cada objeto tiene un contorno totalmente rectangular.
//? Se podría comparar los objetos para darle un contorno especial, como circular a la pelota.

export function detecta_colision(pelota, objeto) {
	// Límites del contorno de la pelota.
	let altos_pelota = pelota.posicion.y;
	let bajos_pelota = pelota.posicion.y + pelota.tamaño;
	let izquierdos_pelota = pelota.posicion.x;
	let derechos_pelota = pelota.posicion.x + pelota.tamaño;

	// Límites del contorno del objeto a comparar.
	let altos_objeto = objeto.posicion.y;
	let bajos_objeto = objeto.posicion.y + objeto.alto;
	let izquierdos_objeto = objeto.posicion.x;
	let derechos_objeto = objeto.posicion.x + objeto.ancho;

	// Comparación de contornos rectangulares.
	if (bajos_pelota >= altos_objeto && altos_pelota <= bajos_objeto && izquierdos_pelota >= izquierdos_objeto && derechos_pelota <= derechos_objeto) {
		return true;
	}

	return false;
}