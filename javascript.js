//Resolver problemas logicos o matematicos
// La programacion es una herramienta para resolver problemas
// Pensamiento computacional:
//Descomposicion: descomponer problemas
//patrones: similitudes
//abstraccion: achicar el problema
// algoritmos: pasos para resolver un problema
// document.write escribe en consola
// variable: espacip de memoria donde se almacena un valor
// las variables se guardan como let nombre="joaco"
// const son variables constantes
// tipos de datos en javascript: integer (1), float(1,1),string, boolean (true/false)
//camel case: verdaderoOFalso (las constantes se escriben en mayusc). Son buenas practicas
//ejemplo de programa
//let nombre;
/*let edad;
nombre = prompt("ingrese su nombre: ")
edad= prompt( "ingrese su edad")
document.write(nombre+ "es un lindo nombre")
document.write('<br>')
document.write("el año que viene tendras " + (number(edad)+1)+"años")*/


/*console.log("Soy externo")
Para acceder a un ID
let parrafo1 = document.getElementById("pConId")
//Para acceder a una clase
console.log(parrafo1)
let parrafo2 = document.getElementsByClassName("pConClase")
console.log(parrafo2)
//Para acceder a una etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

//Cambiar texto con un botÃ³n
function cambiarTitular(){
let titular1 = document.getElementById("titular")
titular1.innerText = "Hola cosa"
}

function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = " <h2>BU!!</h2>"
    contenedor.className ="titularSecundario"
    let texto = "Hola"
    contenedor.append(texto)
}
let paises= document.getElementsByClassName("paises")
console.log(paises)
function borrarPais(){
    let paises= document.getElementsByClassName("paises")
    
    paises[0].remove()
    console.log(paises)
}
function sumar(valor){
    return parseInt(valor) + 1
}

//function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append("El nombre del usuario es: " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario)+1))
    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    //ECMASCRIPT 6
    //template literal
    //back tick ``
    document.body.append(`El nombre de usuario es ${nombreUsuario} y va a cumplir ${sumar(edadUsuario)}`)

}

//query = consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)
let seleccionarUno = document.querySelector("#titular")
console.log(seleccionarUno)
let seleccionarClase = document.querySelectorAll(".paises")
console.log(seleccionarClase)
let seleccionarClaseUnico = document.querySelector(".paises")
console.log(seleccionarClaseUnico) //*/

/*
1) Crear una web nueva con la estructura basica
2) Enlazarla a JavaScript
3) Crear un formulario de registro
4) Preguntar si la edad es mayor a 18, en caso contrario, indicarle al usuario que no se puede registrar
5) Obligar al usuario a estar de acuerdo con terminos y condiciones
6) Mostrarle al usuarios en un parrafo, los datos que ingreso
*/


// clase 24/05
/*input type="text" id="nombre" onchange="guardarData()">
en java
 Function guararData(){let valor=document.getelementbyId("nombre")
localStoragesetitem('name',valor);}
<script src="localstorage.js>
wifislax
dev ops
// getELementById(): Le doy un elemento HTML y me modifica el content del mismo.
document.getElementById("elemento").content = "new value"
JS changes the value(content) of the src (source) attribute of an <img> tag:
both with style.fontsize, display or others CSS contents
los scripts externos son practicos cuando se usa el mismo codigo en muchas pag web distintas
los archivos Javascript tienen extensión de archivo: .jv
Para usar una secuencia de comandos externa, coloque el nombre del archivo de secuencia de comandos en el src atributo(fuente) de una <script> etiqueta:
<script src="myScript.js"></script> en <head or <body>
document.write(""+"")
window.alert("aviso al usuario")
A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

A JavaScript program is a list of programming statements.
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
let: declares a block variable
var: declares a variable
const declare a block contant
if, switch(Marks a block of statements to be executed in different cases)
for: marks a block of staments to ve executed in a loop
funcion/ return: exits a funtion
try: 
JS values:
Literals:
Numbers, strings
Let, var, const
operators: (+,-,*,/,=)
blocks: {}
Contant Arrays:
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
functions:
function name(parameter1, parameter2, parameter3) {
  // code to be executed}


