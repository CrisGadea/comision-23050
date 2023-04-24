// Creamos una variable llamada edad con un valor inicial 15
//var edad = 15;

// Creamos una variable almacenando el dato que nos da el usuario
// con la funcion prompt
/*
var edad = parseInt(prompt("Ingrese su edad"));

var nombre = prompt("Ingrese su nombre");

if (edad < 18) {
    alert("No se permite el ingreso.");
    console.log("El usuario " + nombre + " no se ha logueado exitosamente");
}
else if(edad > 18 && edad < 21){
    console.log("Soy una adulto/a");
}
else {
    alert("login exitoso");
    console.log("El usuario " + nombre + " se ha logueado exitosamente");
}

switch (nombre.toLowerCase()) {
    case "cristian":
        alert("Bienvenido Cristian!")
        break;
    case "carlos":
        alert("Bienvenido Carlos!")
        break;
    case "romina":
        alert("Bienvenida Romina!")
        break;
    default:
        alert("No se permite el ingreso al usuario " + nombre);
        break;
}
*/
// Bucles
// For
/*
for (let i = 0; i < 10; i++) {
    console.log("El valor de i con For es: " + i);
}

// While
let j = 0;
while (j < 10) {
    console.log("El valor de i con While es: " + j);
    j++;
}
*/
// Funciones

// Creamos una funcion llamada saludar que nos devuelve un mensaje en pantalla (sin return)
function saludar () {
    alert("Hola mundo!");
}

// Ejecutamos una función
//saludar();

// Funcion con Return

function esMayorDeEdad(edad){
    if (edad < 18) {
        return "Es menor";
    }
    else {
        return "Es Mayor";
    }
}
var edad = parseInt(prompt("Ingrese su edad"));
console.log(esMayorDeEdad(edad));


