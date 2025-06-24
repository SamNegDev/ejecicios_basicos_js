
//Apartado 2.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };

jedi.edad = 25;
console.log(jedi);

//Apartado 2.2
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan");

//Apartado 2.3
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const total = sable1.precio * 2 + sable2.precio * 2;
console.log("El precio total de 2 sables luz de cada modelo es de : " + total)

//Apartado 2.4
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log("Precios actualizados correctamente!");
console.log("Precio Final Ala-X: " + nave1.precioFinal);
console.log("Precio final Halcón Milenario: " + nave2.precioFinal);