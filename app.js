/**
 * Comenzamos con un primer acercamiento a la interacción javascript/user a traves de la consola de chrome.
 */


alert("Hola a todxs");

prompt("Cómo te llamas?");

let nombre = prompt("Como te llamas?");

alert("Hola " + nombre + " , Bienvenidx");

/**
 * Mini ejercicio suma de dos números
 */

alert("Vamos a sumar..a continuación te pediré que ingreses dos números que quieras sumar");
let primerNumero = prompt("Ingrese primer número");
let segundoNumero = prompt("Ingrese segundo número");
alert("El total de la suma es: " + (primerNumero + segundoNumero)) // nos da un resultado equivocado por ser string
// corrección
let resultado = parseInt(primerNumero) + parseInt(segundoNumero)
alert("El total de la suma es: " + resultado)

/**
 * Mini ejercicio multiplicación de dos números (esto lo hacen solas en base al anterior)
 */

alert("Vamos a multiplicar..a continuación te pediré que ingreses dos números que quieras multiplicar");
let primerNumero = prompt("Ingrese primer número");
let segundoNumero = prompt("Ingrese segundo número");
let resultado = parseInt(primerNumero) * parseInt(segundoNumero)
alert("El total de la multiplicación es: " + resultado)

/**
 * Mini ejercicio user (revisar porque no funciona en jsbin pero si en todas las otras consolas)
 */


let name = prompt("Ingrese nombre del jugador");
while (name === "") {
	name = prompt("Ingrese un nombre de jugador por favor")
}
alert("Bienvenidx " + name + " a nuestro juego de supervivencia");


/**
 * Mini ejercicio match password
 */


let password = prompt("Ingrese su nueva password por favor");
let confirmacionPassword = prompt("Confirme la password ingresada")

if (password !== confirmacionPassword) {
  alert("Error al registrar la password, estas no coinciden")
} else {
  alert("Registro de password exitoso")
}

/**
 * Ejercicio mediano: Programa que recibe pedidos de una cafetería y da el total de la compra.
 * 
 * Precios:
 * agua: 500
 * jugo: 1500
 * 
 * pastel chocolate: 2000
 * pastel piña: 1800
 * pastel crema: 1500
 * pastel mil hojas: 2500
 */


alert("Bienvenidx, vamos a tomar tu pedido")
let nombre = prompt("Cual es tu nombre?")

alert("Hola " + nombre + ", comencemos");
let bebida = prompt("Que bebida quieres? \n Agua \n Jugo");
let pastel = prompt("Que pastel quieres? \n Chocolate \n Piña \n Crema \n Mil Hojas");
let bebidaElegida = bebida.toLowerCase();
let pastelElegido = pastel.toLocaleLowerCase();

const precioAgua = 500;
const precioJugo = 1500;

const precioChocolate = 2000;
const precioPina = 1800;
const precioCrema = 1500;
const precioHojas = 2500;

if (pastelElegido === "chocolate" && bebidaElegida === "agua") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (precioAgua + precioChocolate));

} else if (pastelElegido === "chocolate" && bebidaElegida === "jugo") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (precioJugo + precioChocolate));

} else if (pastelElegido === "piña" && bebidaElegida === "agua") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (precioAgua + precioPina)); 

} else if (pastelElegido === "piña" && bbebidaElegida === "jugo") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (preciojugo + precioPina)); 

}  else if (pastelElegido === "crema" && bebidaElegida === "agua") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (precioAgua + precioCrema)); 

} else if (pastelElegido === "crema" && bebidaElegida === "jugo") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (preciojugo + precioCrema)); 

}  else if (pastelElegido === "mil hojas" && bebidaElegida === "agua") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (precioAgua + precioHojas)); 

} else if (pastelElegido === "mil hojas" && bebidaElegida === "jugo") {
  alert(nombre + " aquí tienes tu pedido: pastel de " + pastel + " y " + bebida + " el total a pagar es: $" + (preciojugo + precioHolas)); 

} else {
  alert("Debe ingresar un pedido válido.")
}


/**
 * Mini ejercicio suma de dos números, ahora en función
 */

 // v1.0
function sumaDosNumeros() {
  alert("Vamos a sumar..a continuación te pediré que ingreses dos números que quieras sumar");
  let primerNumero = prompt("Ingrese primer número");
  let segundoNumero = prompt("Ingrese segundo número");
  let resultado = parseInt(primerNumero) + parseInt(segundoNumero)
  alert("El total de la suma es: " + resultado)
}

// v2.0

function sumaDosNumeros(primerNumero, segundoNumero) {
  let resultado = parseInt(primerNumero) + parseInt(segundoNumero)
  alert("El total de la suma es: " + resultado)
}

sumaDosNumeros(2, 3) // 5
sumaDosNumeros(5, 5) // 10
sumaDosNumeros(10, 48) // 28
sumaDosNumeros(1250, 1990) // 3240

/**
 * Luego de este primer acercamiento vamos a codefights
 */

 /**
  * Plataforma para aprender a programar jugando
  * https://codecombat.com/play
  */