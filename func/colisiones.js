export function detecta_colision(pelota, objeto) {
	let altos_pelota = pelota.posicion.y;
	let bajos_pelota = pelota.posicion.y + pelota.tamaño;
	let izquierdos_pelota = pelota.posicion.x;
	let derechos_pelota = pelota.posicion.x + pelota.tamaño;

	let altos_objeto = objeto.posicion.y;
	let bajos_objeto = objeto.posicion.y + objeto.alto;
	let izquierdos_objeto = objeto.posicion.x;
	let derechos_objeto = objeto.posicion.x + objeto.ancho;

	if (bajos_pelota >= altos_objeto && altos_pelota <= bajos_objeto &&
		izquierdos_pelota >= izquierdos_objeto && derechos_pelota <= derechos_objeto) {
		return true;
	}

	return false;
}