// Bueno ya se que es un array, omitir toda esta definicion,
// se pueden meter numbers y strings.

let frutas = ['Manzana', 'Pera', 'Banana'];
console.log('\nArray Inicial:');
console.log(frutas);


// [.push] mete elementos al final del array
let masFrutas = frutas.push('Frutillas', 'Uvas');
console.log('\nDespues de push:');
console.log(frutas);


// [.pop] elimina el ultimo elemento del array
let ultimo = frutas.pop();
console.log('\nDespues de pop:');
console.log(frutas);


// [.unshift] agrega elementos al inicio del array
let nuevaLongitud = frutas.unshift('Chirimoya');
console.log('\nDespues de unshift:');
console.log(frutas);


// [.shift] elimina el primer elemento del array
let borrarFruta = frutas.shift();
console.log('\nDespues de shift:');
console.log(frutas);


// [.indexOf] busca el indice de algun elemento dentro del array
console.log(frutas.indexOf('Banana'));