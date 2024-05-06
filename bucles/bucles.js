// ejercio  #1
console.log("ejercio #1")
function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
  
   mostrarTablaMultiplicar(numero);
}


// ejercio  #2
console.log("ejercio #2")
function calcularSuma() {
    let suma = 0;
    let numero2;
    while (true) {
        numero2 = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
        if (numero2 === 0) {
            break;
        }
        suma += numero2;
    }
    return suma;
}
let resultado = calcularSuma();
console.log(`La suma de los números ingresados es: ${resultado}`);


//ejercios #3
console.log("ejerecios #3")
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
function adivinarNumero() {
    let intentos = 0;
    while (true) {
        let guess = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;
        if (guess === numeroSecreto) {
           alert(`¡Felicidades! Has adivinado el número secreto ${numeroSecreto} en ${intentos} intentos.`);
            break;
        } else if (guess < numeroSecreto) {
           
            alert("El número es mayor. Inténtalo de nuevo.");
        } else {
           
            alert("El número es menor. Inténtalo de nuevo.");
        }
    }
}
adivinarNumero();



//ejercios #4
console.log("ejerecios #4")
function esPrimo(numero4) {
    if (numero4 <= 1) {
        return false;
    }
    for (let i = 2; i <= numero4 / 2; i++) {
        if (numero4 % i === 0) {
            return false;
        }
    }
    return true;
}
let numero4 = parseInt(prompt("Ingrese un número para verificar si es primo:"));
if (esPrimo(numero4)) {
    console.log(`${numero4} es un número primo.`);
} else {
    console.log(`${numero4} no es un número primo.`);
}


//ejercios #5
console.log("ejerecios #5")
function mostrarDivisores(num) {
    console.log(`Los divisores de ${num} son:`);
     for (let i = 1; i <= num; i++) {
         if (num % i === 0) {
            console.log(i);
        }
    }
}
let num = parseInt(prompt("Ingrese un número para mostrar sus divisores:"));
if (isNaN(num)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    
    mostrarDivisores(num);
}


//ejercios #6
console.log("ejerecios #6")
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(element => {
    console.log(element);
});


//ejercios #7
console.log("ejerecios #7")
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numb.forEach(numb => {
    console.log(numb * 2);
});


//ejercios #8
console.log("ejerecios #8")
const familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre", hobby: "Jardinería" },
    { nombre: "María", edad: 33, relacion: "Madre", hobby: "Lectura" },
    { nombre: "Pedro", edad: 10, relacion: "Hijo", hobby: "Fútbol" },
    { nombre: "Ana", edad: 8, relacion: "Hija", hobby: "Danza" },
    { nombre: "Carlos", edad: 60, relacion: "Abuelo", hobby: "Pintura" }
];
familia.forEach(persona => {
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.relacion} y me gusta ${persona.hobby}.`);
});

//ejercios #9
console.log("ejerecios #9")
const nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nu.forEach(nu => {
    if (nu % 2 !== 0) {
        console.log(nu);
    }
});

//ejercios #10
console.log("ejerecios #10")
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let sumaPares = 0;
let sumaImpares = 0;
function ingresarNumero() {
  rl.question('Ingresa un número (ingresa 0 para salir): ', (numero) => {
    const num = parseInt(numero);
 if (num === 0) {
      console.log(`Suma de números pares: ${sumaPares}`);
      console.log(`Suma de números impares: ${sumaImpares}`);
      rl.close();
    } else if (num % 2 === 0) {
      sumaPares += num;
      ingresarNumero(); 
    } else {
      sumaImpares += num;
      ingresarNumero(); 
    }
  });
}

ingresarNumero();


//ejercios #11
console.log("ejerecios #11")
const numeros = [15, 7, 23, 11, 45, 9, 17, 29, 8, 33];
let numeroMasGrande = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }
}
console.log("El número más grande es:", numeroMasGrande);

//ejercios #12
console.log("ejerecios #12")
const numeross = [15, 7, 23, 11, 45, 9, 17, 29, 8, 33];
let numeroMasChico = numeross[0];
for (let i = 1; i < numeross.length; i++) {
    if (numeross[i] < numeroMasChico) {
        numeroMasChico = numeross[i];
    }
}
console.log("El número más chico es:", numeroMasChico);


//ejercios #13
console.log("ejerecios #13")

const readline = require('readline');
const rla = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let jugador1, jugador2;
function solicitarNombres() {
  rla.question('Ingrese el nombre del jugador 1: ', (nombre1) => {
    jugador1 = nombre1;
    rla.question('Ingrese el nombre del jugador 2: ', (nombre2) => {
      jugador2 = nombre2;
      console.log(`Comienza el juego entre ${jugador1} y ${jugador2}.\n`);
      jugar();
    });
  });
}

function solicitarMano(jugador) {
  rla.question(`[${jugador}] Elije tu mano (piedra, papel o tijeras): `, (mano) => {
    if (mano !== 'piedra' && mano !== 'papel' && mano !== 'tijeras') {
      console.log('Por favor, ingresa una mano válida (piedra, papel o tijeras).\n');
      solicitarMano(jugador); 
    } else {
      return mano;
    }
  });
}


function determinarGanador(mano1, mano2) {
  if (mano1 === mano2) {
    console.log('¡Empate! Vuelve a intentarlo.\n');
    return false; 
  } else if (
    (mano1 === 'piedra' && mano2 === 'tijeras') ||
    (mano1 === 'papel' && mano2 === 'piedra') ||
    (mano1 === 'tijeras' && mano2 === 'papel')
  ) {
    console.log(`${jugador1} gana este turno. ¡Felicidades!\n`);
    return jugador1;
  } else {
    console.log(`${jugador2} gana este turno. ¡Felicidades!\n`);
    return jugador2; 
  }
}
function jugar() {
  solicitarMano(jugador1); 
  solicitarMano(jugador2); 
  let manoJugador1 = 'papel'; 
  let manoJugador2 = 'tijeras'; 
  let ganador = determinarGanador(manoJugador1, manoJugador2); 

  if (!ganador) {
    jugar();
  } else {
    console.log(`¡${ganador} es el ganador del juego! ¡Felicidades!`);
    rl.close();
  }
}
solicitarNombres();

//ejercios #14
console.log("ejerecios #14")

function imprimirTriangulo() {
    for (let i = 1; i <= 5; i++) {
        let fila = '';
        for (let j = 1; j <= i; j++) {
            fila += '*';
        }
        console.log(fila);
    }
}
imprimirTriangulo();

