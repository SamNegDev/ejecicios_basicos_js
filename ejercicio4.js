let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log("Precios actualizados correctamente!");
console.log("Precio Final Ala-X: " + nave1.precioFinal);
console.log("Precio final Halcón Milenario: " + nave2.precioFinal);