let estudiantes = ['David', 'Dome', 'Duchi', 'Sebastian']

function saludarEstudiantes(estudiante){
	console.log(`Ola ${estudiante}\n`)
}

// Aca el shift cada bucle va a ir sacando un estudiante del inicio del array

while (estudiantes.length > 0){
	console.log(estudiantes)
	let estudiante = estudiantes.shift();
	saludarEstudiantes(estudiante)
} 