// JS disenado en un paradigma de objetos

let miCarro = {
	marca: 'Chery',
	modelo: 'Tiggo',
	ano: 2021,

	// this es una variable que hace referencia a un objeto o sea al padre, this = miCarro (en este caso).

	detallesDelAuto: function(){
		console.log(`\nLa marca de mi carro es: ${this.marca} \nEl modelo de mi carro es: ${this.modelo} \nEl año de mi carro es: ${this.ano}`)
	}
};

console.log(miCarro)
miCarro.detallesDelAuto()