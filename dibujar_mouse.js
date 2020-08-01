let canvas = document.getElementById('mouse-canvas');
let lienzo = canvas.getContext('2d');
canvas.addEventListener('mousedown', clickMouse);
canvas.addEventListener('mousemove', moverMouse);
canvas.addEventListener('mouseup', noClickMouse);
document.addEventListener('keydown', dibujarTeclado);

let colorWhite = document.getElementById('white');
let gomaBorrar = document.getElementById('goma-borrar');
let inputColor = document.getElementById('input-color');
let tamPincel = document.getElementById('tamanio-pincel');

colorWhite.addEventListener('click', cambiarColorWhite);
gomaBorrar.addEventListener('click', borrarDibujoGoma);
inputColor.addEventListener('change', cambiarColorWhite);

var borrarLienzo = document.getElementById('boton_borrar');
borrarLienzo.addEventListener('click', borrarPorClick);

let colorcito = inputColor.value;
let estado = 0;
let x, y;

function cambiarColorWhite(event) {
	// Si no existe un valor(.value) en el coso(el div,en estecaso), que por defecto esté en blacno
	if (!event.target.value) {
		colorcito = 'white';
	}
	// para cambiar
	else {
		colorcito = inputColor.value;
		console.log((colorcito = event.target.value));
	}
}
function borrarDibujoGoma() {
	colorcito = '#37454d';
}

function clickMouse(evento) {
	estado = 1;
	x = evento.offsetX;
	y = evento.offsetY;
	console.log('click');
}

let tPincel = parseInt(tamPincel.value);
function moverMouse(evento) {
	let tPincel = parseInt(tamPincel.value);
	if (estado == 1) {
		dibujarLineas(colorcito, x, y, evento.offsetX, evento.offsetY, tPincel);
	}
	x = evento.offsetX;
	y = evento.offsetY;
}

function noClickMouse(evento) {
	estado = 0;
	x = evento.offsetX;
	y = evento.offsetY;
	console.log('stop clik');
}
function borrarPorClick() {
	let alto = canvas.height;
	let ancho = canvas.width;
	lienzo.clearRect(0, 0, ancho, alto);
}
let teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	DIAGONAL_D: 68,
	DIAGONAL_A: 65,
	DIAGONAL_W: 87,
	DIAGONAL_S: 83,
};

function dibujarTeclado(evento) {
	let movimiento = 7;
	switch (evento.keyCode) {
		case teclas.UP:
			dibujarLineas(colorcito, x, y, x, y - movimiento, tPincel);
			y = y - movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.DOWN:
			dibujarLineas(colorcito, x, y, x, y + movimiento, tPincel);
			y = y + movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.LEFT:
			dibujarLineas(colorcito, x, y, x - movimiento, y, tPincel);
			x = x - movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.RIGHT:
			dibujarLineas(colorcito, x, y, x + movimiento, y, tPincel);
			x = x + movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.DIAGONAL_D:
			dibujarLineas('RED', x, y, x + movimiento, y + movimiento, tPincel);
			x = x + movimiento;
			y = y + movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.DIAGONAL_A:
			dibujarLineas('ORANGE', x, y, x - movimiento, y - movimiento, tPincel);
			x = x - movimiento;
			y = y - movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.DIAGONAL_W:
			dibujarLineas('rebeccapurple', x, y, x + movimiento, y - movimiento, tPincel);
			x = x + movimiento;
			y = y - movimiento;
			console.log(evento.keyCode);
			break;
		case teclas.DIAGONAL_S:
			dibujarLineas('brown', x, y, x - movimiento, y + movimiento, tPincel);
			x = x - movimiento;
			y = y + movimiento;
			console.log(evento.keyCode);
			break;
		default:
			console.log('Nopibe');
			break;
	}
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, tamPincel) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = tamPincel;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
