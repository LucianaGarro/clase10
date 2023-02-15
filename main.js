//Storage:
//Nos permite guardar datos de manera local en el navegador, generar persistencia datos.
//El navegador nos va a ofrecer dos formas diferentes de guardar datos en el storage.
//1) localStorage: almacena los datos de forma INDEFINIDA hasta que el ususario los borre de forma manual. 
//2) sessionStorage: almacena los datos hasta que el usuario cierre el navegador. 

//1) Vamos a trabajar con localStorage: 
// Para guardar datos en el local tenemos que usar un métodos que se llama setItem().
//Esto lo hacemos llamando a un objeto global llamado localStorage
//setItem (): va a recibir DOS parámetros: el nombre de la clave y el valor que a guardar. 

 //Ejemplo A:
localStorage.setItem("Saludo", "Hola mundo");

//Ejemplo B: almaceno un número

localStorage.setItem("numero", 1234);

//Ejemplo C: almacenamos un booleano

localStorage.setItem("booleano", true);

//Para recuperar los datos almacenados, utilizamos el método getItem () en una variable.

// let saludo = localStorage.getItem("Saludo")
// console.log(saludo);

//Recuperar el número

// let numero = localStorage.getItem("numero");
// console.log(numero);

//2) sessionStorage:
//funcionamiento similar a localStorage
//guardamos datos con el método de setItem ()

//Ejemplo: almacenamos un saludo en sessionStorage

// sessionStorage.setItem("SaludoNuevo", "HolaMundooo");

// let saludo2 = sessionStorage.getItem("SaludoNuevo");
// console.log(saludo2);

//ELIMINAMOS DATOS DEL STORAGE: 
//PARA ELIMINAR DATOS DE LOCALSTORAGE, UTILIZAMOS EL MÉTODO removeItem()

// localStorage.removeItem("Saludo");

//También puedo eliminar toda la información del localStorage con 
//el método clear ()

// localStorage.clear();

//Recorremos con un bucle localStorage:
//Utilizamos el método key() que nos devuelve un array con las claves del storage.

for (let i=0; i <localStorage.length; i++){
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
};

// Almacenar objetos en el storage
// tener en cuenta que todo lo que se almacena en storage se hace en formato de string.
//Si queremos almacenar un objeto, tenemos que pasarlo a string.
//JSON: javascript obtect notation. Es un formato de texto ligero para el intercambio de datos. 
//Json es un string con un formato especial.

//creamos un objeto para pasarlo a Json

const luciana = {
    nombre: "luciana",
    apellido: "Garro",
    edad: 20

};

//Utilizamos el método JSON stringify ()

const luciana1JSON = JSON.stringify(luciana);
console.log(luciana1JSON);

//Almacenarlo en localStorage:

localStorage.setItem("luciana", luciana1JSON);

//Si quiero recuperar un JSON del localStorage y convertirlo a objeto nuevamente tengo que utilizar un método JSON.parse()

const personaJSON = localStorage.getItem("luciana");
const persona = JSON.parse(personaJSON);
console.log(persona);

//Ejemplo utilizando lo que es localStorage para cambiar el modo dark o light

//1) crear un botón para cambiar el modo de la página
//2) almacenar el modo en el localStorage
//3) Al recargar la página, recuperar el modo del localStorage
//4) cambiar el modo de la página

const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark")
    } else {
        localStorage.setItem("modo", "light");
    }
})

//recuperamos el modo del localStorage
const modo = localStorage.getItem ("modo");
if (modo === "dark"){
    document.body.classList.add("dark");
} else{
    document.body.classList.remove("dark");
}

//Recordemos:
//document es el objeto que representa al documento HTML
//body es el elemento que representa al body del documento HTML
//classlist es una propiedad que nos devuelve una lista de las clases del elemento.
//toggle: es un método que nos permite agregar o eliminar una clase del elemento. 















