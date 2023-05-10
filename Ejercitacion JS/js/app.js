// Ejercicio 1

// Solución 1

//var nombre = "Cristian";
//var apellido = "Gadea";
//var comision = 23050;
//var hobbies = ["Leer", "Estudiar", "Hacer Cursos", "Tocar la guitarra"];

//console.log(nombre, apellido, comision);
//console.table(hobbies);

// Solución 2
//console.log("Me llamo Cristian Gadea, mi comisión es la 23050 y mis hobbies son aprender programación y estudiar");


/*
    Ejercicio 2

    Escribe un programa que le pida al usuario ingresar una frase 
    y la imprima en la consola. 
    Recuerda que para pedirle al usuario que escriba una frase 
    debes utilizar el método prompt() y para escribir  en la consola debes utilizar el método console.log().

 */

// Solución 1

//var frase = prompt("Ingrese una frase");

//console.log(frase);

//var nombre = prompt("Ingrese su nombre")

//console.log("Hola " + nombre)

/*
    Ejercicio 14 
    Crear un programa que al ingresar una nota de un alumno,
     muestre con un alert() si el alumno esta  “aprobado” 
     (se aprueba con una nota mayor o igual a 7) y “reprobado” 
     en caso contrario

*/

// 1) Pedir nota al usuario
//var nota = parseInt(prompt("Ingrese su nota"))
//var resultado;

// 2) validar que la nota sea igual o mayor que 7
// 3) Mostrar al alumno si aprobó o reprobó

// Forma 1 IF-ELSE
/*if (nota >= 7) {
    alert("APROBADO")
} else {
    alert("DESAPROBADO")
}*/

// Operador Ternario
//nota >= 7 ? alert("APROBADO") : alert("DESAPROBADO")

// Forma 2 IF-ELSE
/*if (nota < 7) {
    resultado = "DESAPROBADO"
} else {
    resultado = "APROBADO"
}*/

/*
    Ejercicio 5 
    Escribe un programa que le pida al usuario su año de nacimiento
    e imprima su edad actual en la consola  con la frase
    "Tienes X años".
 */

// Pasos para ejecutar el algoritmo
// 1. Consigo el año de nacimiento del usuario
// 2. Calcular la edad del usuario
// 3. Mostrar por pantalla un mensaje

// Para obtener el año ingresado como número debemos usar la función
// parseInt() de Js
//let anio = parseInt(prompt("Ingrese su año de nacimiento"));

//const anioActual = 2023;

// Solución 2: Función
/*
function calcularEdad(anioNacimiento){
    return anioActual - anioNacimiento;
}*/

//const calcularEdad = anioNacimiento => anioActual - anioNacimiento;

//let edad = calcularEdad(anio);

//alert("Tiene " + edad + " años");



var titulo = document.getElementById("titulo");
titulo.innerHTML = "Hola Mundo";

console.log(titulo)

//document.body.style.backgroundColor = "green";
titulo.style.textAlign = "center"


// Declaración de la Función ver Fecha
function verFecha(){
    document.getElementById("fecha").innerHTML = Date();
}


var form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;

    console.log(nombre, password);

})