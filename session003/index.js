
// // *** OPERADORES DE IGUALDAD ***

// let x = 10;
// let y = 20;

// // Igualdad (==)
// console.log(x == y); // false

// // Desigualdad (!=)
// console.log(x != y); // true

// // PARA MAS ADELANTE
// // Estrictamente igual (===)
// console.log(x === y); // false

// // Estrictamente desigual (!==)
// console.log(x !== y); // true


// let m = 5;
// let n = 10;

// if (m != n) {
//   console.log('m es diferente de n');
// } else {
//   console.log('m es igual a n');
// }


// // *** OPERADORES DE RELACION ***

// // Mayor que (>)
// console.log(x > y); // false

// // Mayor o igual que (>=)
// console.log(x >= y); // false

// // Menor que (<)
// console.log(x < y); // true

// // Menor o igual que (<=)
// console.log(x <= y); // true

// // *** OPERADORES LÓGICOS ***

// // AND lógico (&&)
// let a = true;
// let b = false;
// console.log(a && b); // false

// // OR lógico (||)
// console.log(a || b); // true

// // NOT lógico (!)
// console.log(!a); // false
// console.log(!b); // true

// // *** OPERADORES MATEMÁTICOS ***

// let num1 = 10;
// let num2 = 5;

// // Suma (+)
// let suma = num1 + num2;
// console.log(suma); // 15

// // Resta (-)
// let resta = num1 - num2;
// console.log(resta); // 5

// // Multiplicación (*)
// let multiplicacion = num1 * num2;
// console.log(multiplicacion); // 50

// // División (/)
// let division = num1 / num2;
// console.log(division); // 2

// // Módulo (%)
// let modulo = num1 % num2;
// console.log(modulo); // 0

// // Exponenciación (**)
// let potencia = num1 ** num2;
// console.log(potencia); // 100000



// // *** OPERADOR DE INCREMENTO Y DECREMENTO ++ -- ***

// let p = 5;
// console.log(p++); // Imprime 5, luego p se incrementa a 6


// let q = 5;
// console.log(++q); // Incrementa q a 6, luego imprime 6

// let r = 5;
// console.log(r--); // Imprime 5, luego r se decrementa a 4
// console.log(r);   // Imprime 4

// let s = 5;
// console.log(--s); // Decrementa s a 4, luego imprime 4

// // *** INDENTACIÓN, JERARQUÍA, BLOQUES DE CÓDIGO ***

// if (y > 15) {
//   // Bloque de código indentado correctamente
//   console.log('y es mayor que 15');

//   if (y > 25) {
//     console.log('y es mayor que 25');
//   } else {
//     console.log('y es menor o igual a 25');
//   }
// } else {
//   console.log('y es menor o igual a 15');
// }

// // *** ELSE IF ***

// if (x > 10) {
//   console.log('x es mayor que 10');
// } else if (x < 10) {
//   console.log('x es menor que 10');
// } else {
//   console.log('x es igual a 10');
// }

// // *** WHILE ***

// let count = 0;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// // Ejemplo 1: Contar hacia atrás
// let countdown = 10;
// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }

// // Ejemplo 2: Sumar números hasta un límite
// let sum = 0;
// let num = 1;
// while (num <= 100) {
//   sum += num;
//   num++;
// }
// console.log('Suma total:', sum); // 5050

// // Ejemplo 3: Encontrar el primer número divisible por 7 y mayor que 50
// let number = 51;
// while (number % 7 !== 0) {
//   number++;
// }
// console.log('El primer número divisible por 7 y mayor que 50 es:', number); // 56

// // Ejemplo 4: Leer valores hasta encontrar un valor específico
// let values = [2, 4, 6, 8, 10, 12, 14, 16];
// let index = 0;
// while (index < values.length && values[index] !== 10) {
//   index++;
// }
// if (index < values.length) {
//   console.log('Valor 10 encontrado en la posición:', index); // 4
// } else {
//   console.log('Valor 10 no encontrado');
// }