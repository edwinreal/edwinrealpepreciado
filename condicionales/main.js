
// ejercios #1
console.log( "ejercio 1")

let numero1 = 15
let numero2 = 20
if(numero1 === numero2){
    console.log("los numeros son iguales")
}
else if(numero1 < numero2){
    console.log("20 es mayor que 15")
}
else if(numero1 > numero2){
    console.log("15 es menor que 20")
}

// ejercios #2
console.log( "ejercio 2")

let numero3 = 20
let numero4 = 35
if(numero3 === numero4){
    console.log("los numeros son iguales")
}
else if(numero3 < numero4){
    console.log("20 es diferente a 35")
}
else if(numero3 > numero4){
    console.log("35 es diferente a  20")
}

// ejercios #3
console.log( "ejercio 3")

let numero5 = 20
let numero6 = 35
if(numero5 === numero6){
    console.log("los numeros son iguales")
}
else if(numero5 < numero6){
    console.log("20 es menor que 35")
}
else if(numero5 > numero6){
    console.log("35 es mayor que  20")
}


// ejercios 4#
console.log( "ejercio 4")

let numero7 = 40
let numero8 = 35
let numero9 = 20
if(numero7 >= numero8 >= numero9){
    console.log("40 es mayor que todos")
}
else if(numero7 <= numero8 <= numero9){
    console.log("20 es menor que todos")
}
else if(numero7 === numero8 === numero9){
    console.log("Todos son iguales")
}

// ejercios 5#
console.log( "ejercio 5")


class Persona {
    constructor(nombre, edad, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
}

// Definimos dos personas
let persona1 = new Persona("Juan", 30, 175);
let persona2 = new Persona("María", 25, 170);

// Comparamos alturas
if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es más alto/a que ${persona2.nombre}`);
} else if (persona1.altura < persona2.altura) {
    console.log(`${persona2.nombre} es más alto/a que ${persona1.nombre}`);
} else {
    console.log("Ambas personas tienen la misma altura");
}

// Comparamos edades
if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
} else if (persona1.edad < persona2.edad) {
    console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
} else {
    console.log("Ambas personas tienen la misma edad");
}



// ejercios 6#
console.log( "ejercio 6")


// Solicitar al usuario que ingrese su nombre, edad, altura y visión
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let altura = parseInt(prompt("Ingrese su altura en cm:"));
let vision = parseFloat(prompt("Ingrese su visión (de 0 a 10):"));

// Comprobar si la persona está capacitada para conducir
if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(`${nombre}, estás capacitado/a para conducir.`);
} else {
    console.log(`${nombre}, no estás capacitado/a para conducir.`);
}

// ejercios 7#
console.log( "ejercio 7")

// Solicitar al usuario que ingrese su nombre, tipo de pase y si posee entrada
let nombre1 = prompt("Ingrese su nombre:");
let pase = prompt("Ingrese su tipo de pase (vip o normal):").toLowerCase();
let tieneEntrada = prompt("¿Posee entrada? (si/no):").toLowerCase();

// Verificar si la persona tiene acceso libre
if (nombre1 === "Tu Nombre" || pase === "vip") {
    console.log("¡Bienvenido/a!");

    // Verificar si la persona desea utilizar su entrada
    if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
        console.log("¡Bienvenido/a de nuevo!");
    }
} else {
    // Preguntar si la persona desea comprar una entrada
    let comprarEntrada = prompt("¿Desea comprar una entrada? (si/no):").toLowerCase();
    
    if (comprarEntrada === "si" || comprarEntrada === "s") {
        // Solicitar el dinero disponible
        let dineroDisponible = parseFloat(prompt("Ingrese el dinero disponible:"));

        // Verificar si el dinero disponible es suficiente
        if (dineroDisponible >= 1000) {
            console.log("Venta de entrada realizada. ¡Bienvenido/a!");
        } else {
            console.log("Lo siento, no tiene suficiente dinero para comprar una entrada. ¡Hasta luego!");
        }
    } else {
        console.log("¡Hasta luego!");
    }
}




// ejercios 8#
console.log( "ejercio 8")

// Establecer el número incógnito entre 1 y 10
const numeroIncognita = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

// Solicitar al usuario que ingrese un número en cada intento
let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));

// Verificar si el número ingresado es igual al número incógnito
if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste, has adivinado el número!");
} else {
    while (intentos > 1) {
        // Verificar si el número ingresado es mayor o menor que el número incógnito
        if (numeroIngresado > numeroIncognita) {
            console.log("El número ingresado es mayor. Vuelve a intentarlo.");
        } else {
            console.log("El número ingresado es menor. Vuelve a intentarlo.");
        }
        
        // Reducir el número de intentos restantes y solicitar otro número al usuario
        intentos--;
        numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));
        
        // Verificar si el número ingresado es igual al número incógnito
        if (numeroIngresado === numeroIncognita) {
            console.log("¡Ganaste, has adivinado el número!");
            break;
        }
    }
    // Si el usuario no adivinó el número en los tres intentos
    if (intentos === 1 && numeroIngresado !== numeroIncognita) {
        console.log("Lo siento, has agotado tus intentos. El número incógnito era " + numeroIncognita);
    }
}


// ejercios 9#
console.log( "ejercio 9")

let edad3 = parseInt(prompt("Ingresa tu edad"))

if(edad3 >= 0 && edad3 <= 12 ){
    console.log("Eres un infante")
}
else if(edad3 >= 13 && edad3 <= 18){
    console.log("Eres un adolesente")
}
else if(edad3 >= 19 && edad3 <= 45){
    console.log("Eres una persona joven")
}
else if(edad3 >= 46 && edad3 <= 99){
    console.log("Eres un persona con bastante edad")
}
else if (edad3 >= 100){
    console.log("De verdad tienes esa edad")

}


// ejercios 10#
console.log( "ejercio 10")

console.log("Bienvenidos al juego de Piedra, Papel o Tijeras");

let jugador1 = prompt("Jugador 1, ingresa tu elección (PIEDRA, PAPEL o TIJERAS): ").toUpperCase();
let jugador2 = prompt("Jugador 2, ingresa tu elección (PIEDRA, PAPEL o TIJERAS): ").toUpperCase();

if (!["PIEDRA", "PAPEL", "TIJERAS"].includes(jugador1) || !["PIEDRA", "PAPEL", "TIJERAS"].includes(jugador2)) {
    console.log("Uno de los jugadores hizo un movimiento incorrecto.");
} else {
    if (jugador1 === jugador2) {
        console.log("Empate");
    } else if ((jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
               (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
               (jugador1 === "TIJERAS" && jugador2 === "PAPEL")) {
        console.log("El ganador es: Jugador 1");
    } else if ((jugador2 === "PIEDRA" && jugador1 === "TIJERAS") ||
               (jugador2 === "PAPEL" && jugador1 === "PIEDRA") ||
               (jugador2 === "TIJERAS" && jugador1 === "PAPEL")) {
        console.log("El ganador es: Jugador 2");
    } else {
        console.log("Uno de los jugadores hizo trampa");
    }
}


// ejercios 11#
console.log( "ejercio 11") 

let color = prompt("Ingrese un color: ").toLowerCase();

switch(color) {
    case "blanco":
    case "negro":
        console.log("Falta de color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marrón":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado");
}



// ejercios 12#
console.log( "ejercio 12") 
let numero12 = parseFloat(prompt("Ingrese el primer número: "));
let numero22 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división): ").toLowerCase();
let resultado;

switch (operacion) {
    case "suma":
        resultado = numero12 + numero22;
        console.log("La suma es:", resultado);
        break;
    case "resta":
        resultado = numero12 - numero22;
        console.log("La resta es:", resultado);
        break;
    case "multiplicación":
        resultado = numero12 * numero22;
        console.log("La multiplicación es:", resultado);
        break;
    case "división":
        if (numero2 !== 0) {
            resultado = numero12/ numero22;
            console.log("La división es:", resultado);
        } else {
            console.log("ERROR: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación no reconocida.");
}




 