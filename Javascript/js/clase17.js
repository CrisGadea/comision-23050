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

// Ejemplo de Clousure
var calcular = function(num1, num2){

    var suma = num1 + num2;
    
    function validarNumeros(suma, num2){

        return suma > num2;
    }

} 


// Arrow Function

// Si la funcion unicamente devuelve un dato, podemos precindir de la palabra return y {}
var hola = () => "hola";

// ejecutamos la función
hola();


var saludar = nombre => {
    console.log(nombre);
}

var resta = (num1, num2) => {

}

*/



// Arrays

var miPrimerArray = ['Cristian', "Gadea", 26, true]; // 4 elementos

// Forma For each
miPrimerArray.forEach(elemento => {
    console.log(elemento);
});

// Forma For Tradicional
for (let i = 0; i < miPrimerArray.length; i++) {
    console.log(miPrimerArray[i]);
}

