let articulos = [
	{ nombre: 'Bicicleta', precio: 60},
	{ nombre: 'Television', precio: 200},
	{ nombre: 'Libro', precio: 10},
	{ nombre: 'Celular', precio: 500},
	{ nombre: 'Laptop', precio: 900},
	{ nombre: 'Teclado', precio: 70},
	{ nombre: 'Audifonos', precio: 120},
]


// find valida un true o un false y va a generar un nuevo array si es que existe

let encontrarArticulo = articulos.find(function(articulo){
	return articulo.nombre === 'Laptop';
})
console.log(encontrarArticulo);


// forEach no genera un nuevo array, va a hacer un filtrado sobre un array y va a regresar las cosas

// Con esto solo me regresa los nombres de los articulos sin estar en un array

articulos.forEach(function(articulo){
	console.log(articulo.nombre)
});


// some nos va a regresar una validacion de verdadero o falso para cosas que cumplan esa validacion, este si genera un nuevo array

// Esto nos va a regresar true, porque nos esta validando que si hay articulos menores a 100 dolares

let articulosBaratos = articulos.some(function(articulo){
	return articulo.precio <= 100
});

console.log(articulosBaratos)