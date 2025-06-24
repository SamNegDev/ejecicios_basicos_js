/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. 
Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
*/

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function nameFinder(nameList, name) {
    console.log("¿El nombre " + name + " existe dentro del array? " + nameList.includes(name));
    if (nameList.includes(name)) {
        console.log("El nombre esta en la posición: " + nameList.indexOf(name));
    } else {
        console.log("Vaya, parece que este nombre no está en la lista")
    }
}
nameFinder(names, "Elena");
nameFinder(names, "Bruce");