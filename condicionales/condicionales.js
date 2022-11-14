// Todo lo que este dentro del if tiene que ser verdad (true)

if (true){
	console.log('Soy verdadero');
} else {
	console.log('Soy falso');
}

let edad = 18;
// let edad = 20;
// let edad = 7;

if (edad === 18){
	console.log('Puedes votar por primera vez');

} else if (edad > 18){
	console.log('Puedes votar de nuevo');

} else {
	console.log('No puedes votar');
}


// Operador ternario "?": Esto genera un if y un else en una misma linea
// Sintaxis: [condition] [valor por verdadero] [:] [valor por falso]

let numero = 1;
let resultado = numero === 1 ? 'Si soy un 1' : 'No soy un 1';
console.log(resultado)


// EJERCICIO DE PIEDRA PAPEL O TIJERA

let opcion1 = "Piedra";
let opcion2 = "Papel";
let opcion3 = "Tijera";

function jugar(jugador, pc) {

	if (jugador === pc){
		console.log('\nEmpate')
	
	} else if (jugador == "Piedra" && pc == "Tijera"|| jugador == "Papel" && pc == "Piedra" || jugador == "Tijera" && pc == "Papel"){
		console.log('\nGanaste!');

	} else {
		console.log('\nLa computadora gano');
	}
}

jugar(opcion1, opcion1)