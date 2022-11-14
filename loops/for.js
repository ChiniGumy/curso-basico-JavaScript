let estudiantes = ['David', 'Dome', 'Duchi', 'Sebastian']

function saludarEstudiantes(estudiante){
	console.log(`Ola ${estudiante}`)
}

for(let i = 0; i < estudiantes.length; i++){
	saludarEstudiantes(estudiantes[i])
}