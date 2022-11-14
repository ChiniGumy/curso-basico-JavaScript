let articulos = [
	{ nombre: 'Bicicleta', precio: 60},
	{ nombre: 'Television', precio: 200},
	{ nombre: 'Libro', precio: 10},
	{ nombre: 'Celular', precio: 500},
	{ nombre: 'Laptop', precio: 900},
	{ nombre: 'Teclado', precio: 70},
	{ nombre: 'Audifonos', precio: 120},
];


// filter va a validar si es verdadero o falso y lo va a meter en un nuevo array, va a generar un nuevo array

// Aca solo esta metiendo a un nuevo array los articulos que cumplieron la validacion de que si son menores o iguales a 100

let articulosFiltrados = articulos.filter(function(articulo){
	return articulo.precio <= 100;
});

console.log(articulosFiltrados);


// map va ayudar a mapear ciertos articulos, va a generar un nuevo array

// con esto solo va a regresar los nombes de los articulos en un nuevo array

nombreArticulos = articulos.map(function(articulo){
	return articulo.nombre;
})

console.log(nombreArticulos);