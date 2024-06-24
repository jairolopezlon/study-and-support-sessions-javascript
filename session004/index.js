//*** palabra reservada break ***

// Ejemplo 2: Salir de un bucle while cuando se alcanza cierto valor
let j = 0;
while (true) {
  console.log(j);
  j++;
  if (j === 3) {
    break;
  }
}

// Ejemplo 3: Salir de un bucle while cuando se alcanza cierto valor basado en una condición externa
let targetValue = 10;
let currentNumber = 1;
while (currentNumber <= targetValue) {
  if (currentNumber % 3 === 0) {
    console.log(currentNumber);
    break;
  }
  currentNumber++;
}
// Este bucle imprimirá el primer número divisible por 3 entre 1 y 10, en este caso, el número 3.

// Ejemplo 4: Salir de un bucle while basado en una condición de entrada de usuario
let userInput;
while (true) {
  userInput = prompt("Ingrese una palabra (o 'salir' para terminar):");
  if (userInput === "salir") {
    break;
  }
  console.log("Palabra ingresada:", userInput);
}
// Este bucle solicitará al usuario que ingrese palabras hasta que escriba "salir", momento en el cual se detendrá.


//*** operador ternario ***

// Ejemplo 1: Uso básico del operador ternario para asignar un valor
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// Ejemplo 2: Ternario anidado para múltiples condiciones
let calificacion = 80;
let resultado = (calificacion >= 90) ? "A" : (calificacion >= 80) ? "B" : "C";
console.log(resultado);

// Ejemplo 3: Ternario para verificar si un número es par o impar
let numero = 7;
let paridad = (numero % 2 === 0) ? "par" : "impar";
console.log(paridad);



//*** Math.random ***

// Ejemplo 1: Generación de número aleatorio entre 0 y 1
let random1 = Math.random();
console.log(random1);

// Ejemplo 2: Generación de número aleatorio entre un rango específico
let min = 1;
let max = 10;
let random2 = Math.random() * (max - min) + min;
console.log(random2);

// Ejemplo 3: Obtener un índice aleatorio de un array
let items = ["Manzana", "Banana", "Cereza", "Durazno"];
let randomIndex = Math.floor(Math.random() * items.length);
console.log(items[randomIndex]);


//*** Math.floor ***

// Ejemplo 1: Redondear hacia abajo un número decimal
let num1 = 9.75;
let resultado1 = Math.floor(num1);
console.log(resultado1); // Imprime 9

// Ejemplo 2: Obtener el índice inferior de un rango
let num2 = 15.8;
let resultado2 = Math.floor(num2);
console.log(resultado2); // Imprime 15

// Ejemplo 3: Utilización con Math.random para obtener un número entero aleatorio
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);


//*** Math.ceil ***

// Ejemplo 1: Redondear hacia arriba un número decimal
let num3 = 3.2;
let resultado3 = Math.ceil(num3);
console.log(resultado3); // Imprime 4

// Ejemplo 2: Redondear hacia arriba un número entero
let num4 = 7;
let resultado4 = Math.ceil(num4);
console.log(resultado4); // Imprime 7

// Ejemplo 3: Utilización con Math.random para obtener un número entero aleatorio
let randomNum2 = Math.ceil(Math.random() * 100);
console.log(randomNum2);


//*** Math.round ***

// Ejemplo 1: Redondear un número decimal al entero más cercano
let num5 = 4.49;
let resultado5 = Math.round(num5);
console.log(resultado5); // Imprime 4

// Ejemplo 2: Redondear un número decimal al entero más cercano
let num6 = 7.51;
let resultado6 = Math.round(num6);
console.log(resultado6); // Imprime 8

// Ejemplo 3: Redondear un número decimal al entero más cercano
let num7 = 6.5;
let resultado7 = Math.round(num7);
console.log(resultado7); // Imprime 6


//*** parseInt ***

// Ejemplo 1: Convertir una cadena numérica en un entero
let cadena1 = "123";
let entero1 = parseInt(cadena1);
console.log(entero1); // Imprime 123

// Ejemplo 2: Convertir una cadena hexadecimal en un entero
let cadena2 = "0xFF";
let entero2 = parseInt(cadena2);
console.log(entero2); // Imprime 255

// Ejemplo 3: Manejar cadenas no numéricas con parseInt
let cadena3 = "abc123";
let entero3 = parseInt(cadena3);
console.log(entero3); // Imprime NaN (No es un número)


// Ejemplo 1: Comparación estricta con ===
let num9 = 5;
let num10 = "5";
if (num9 === num10) {
  console.log("num1 y num2 son iguales en valor y tipo");
} else {
  console.log("num1 y num2 no son iguales en valor y tipo");
}
// En este caso, la salida será: "num1 y num2 no son iguales en valor y tipo",
// porque num1 es un número y num2 es una cadena, por lo que son de tipos diferentes.

// Ejemplo 2: Comparación estricta con !==
let value1 = 10;
let value2 = "10";
if (value1 !== value2) {
  console.log("value1 y value2 no son iguales en valor o tipo");
} else {
  console.log("value1 y value2 son iguales en valor o tipo");
}
// En este ejemplo, la salida será: "value1 y value2 no son iguales en valor o tipo",
// porque aunque ambos tienen el mismo valor "10", value2 es una cadena y value1 es un número.
