function carro(marca, modelo, ano){
	this.marca = marca
	this.modelo = modelo
	this.ano = ano
}

let carro1 = new carro ('Tesla', 'Model 3', 2021);
let carro2 = new carro ('Chery', 'Tiggo 3', 2020);
let carro3 = new carro ('Hyundai', 'Accent', 2022);

console.log(carro1)
console.log(carro2)
console.log(carro3)