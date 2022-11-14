// En este desafío vas a recibir un objeto car como parámetro de la función solution.

// Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

function solution(car) {

	if (car.licensePlate){
		drivingLicense = true;
		console.log('Se te dara licencia');

	} else {
		drivingLicense = false;
		console.log('No se te dara licencia');
	}
	return car;
}

solution({color: 'red',brand: 'Kia',});
  
solution({color: 'gray',brand: 'Chevrolet',licensePlate: 'AAA111',});

solution({licensePlate: 'RGB255'});