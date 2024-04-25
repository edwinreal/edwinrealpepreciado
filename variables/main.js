// ejercios #1
console.log( "ejercio 1")

let miNombre = "Edwin Terencio"
console.log(miNombre)

// ejercios #2
console.log("ejercio 2")

let miApellido = "Realpe Preciado"
console.log(miApellido)

// ejercios #3
console.log("ejercio 3")

let miEdad = 29
console.log(miEdad)

// ejercios #4
console.log("ejercio 4")

let miMascota = "Molly"
console.log(miMascota)

// ejercios #5
console.log("ejercio 5")

let edadMascota = 2
console.log(edadMascota)


// ejercios #6
console.log("ejercio 7")

let nombreCompleto = miNombre+" "+miApellido
console.log(nombreCompleto)

// ejercios #7
console.log("ejercio 8")

let textoPresentacion = "Cordial saludo mi nombre es:"+ miNombre +" y mis apellidos son: "+ miApellido +" tengo " + miEdad +" años y tengo un gatito que se llama " + miMascota + " y tiene " + edadMascota + " años de edad"
console.log(textoPresentacion)

//ejercios #8
console.log("ejercio 9")

let sumaEdades = miEdad + edadMascota
console.log(sumaEdades)

let restaEdades = miEdad - edadMascota
console.log(restaEdades)

let productoEdades = miEdad % edadMascota
console.log(productoEdades)

let divisionEdades = miEdad / edadMascota
console.log(divisionEdades)

// ejercios #10
//console.log("ejercio 10")

//miNombre = prompt("Digita Tus Nombres")
//console.log(miNombre)


//miApellido = prompt("Digita Tus Apellidos")
//console.log(miApellido)


//miEdad = parseInt(prompt("Digita Tu edad"))
//console.log(miEdad)


//miMascota = prompt("Digita el Nombre de Tu Mascota")
//console.log(miMascota)


//edadMascota = parseInt(prompt("Digita la edad de tu Mascota"))
//console.log(edadMascota)


// ejercios #11
console.log("ejercio 11")

let alumno ={
 nombre: miNombre,
 apellidos:  miApellido,
 edad: miEdad,
 mascota: miMascota,
 edadMimascota: edadMascota,

}
console.table(alumno)
console.table(alumno.nombre)
console.table(alumno.apellidos)
console.table(alumno.mascota)
console.table(alumno.edadMimascota)

// ejercios #12
console.log("ejercio 12")

let mascota = {
    nombreMascota:miMascota,
    edadDeMimascota:edadMascota,
    colorDeMimascota: "negra",
    tipoDeMascota: "gato",
    gustoDeMImascota:"dormir"
}

// ejercios #13
console.log("ejercio 13")

console.table(mascota)
console.table(mascota.nombreMascota)
console.table(mascota.edadDeMimascota)
console.table(mascota.colorDeMimascota)
console.table(mascota.gustoDeMImascota)

// ejercios #14
console.log("ejercio 14")

let frutas = ['Manzanas','Uvas','Plátanos','Piña','Fresas'];
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

// ejercios #15
console.log("ejercio 15")

let números=[1,2,3,4,5];
console.log(números)
console.log(números[0])
console.log(números[1])
console.log(números[2])
console.log(números[3])
console.log(números[4])


// ejercios #16
console.log("ejercio 16")

let familia = ["andres","roberto","carlos","diana","carolina"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])


// ejercios #17
console.log("ejercio 17")
let textoAleatorio = "mi gata "+mascota.nombreMascota+" come "+frutas[3]+" y tiene "+números[4]+" años"

console.log(textoAleatorio)


// ejercios #17
console.log("ejercio 17")

//let Edad = parseInt(prompt("Digita Tu edad"))
//let EdadCompañero = parseInt(prompt("Digita Tu edad"))
//console.log(Edad)
//console.log(EdadCompañero)
//let edadesIguales = Edad === EdadCompañero
//console.log(edadesIguales)
//let soyMayor = Edad > EdadCompañero 
//console.log(soyMayor)
//let soyMenor = Edad < EdadCompañero
//console.log(soyMenor)


// ejercios #18
console.log("ejercio 18")

//let soyMayorDeEdad = parseInt(prompt("Digita Tu edad"))
//console.log("soy mayor de edad "+soyMayorDeEdad)

//let edadPersona = parseInt(prompt("Digita Tu edad"))
//let altura = parseInt(prompt("Digita Tu altura"))
console.log(edadPersona)
console.log(altura)
