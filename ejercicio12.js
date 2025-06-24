/*
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.
*/


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
function removeDuplicates(list) {
    let uniques = []
    for (const element of list) {
        if (!uniques.includes(element)) {
            uniques.push(element);
        }
    }
    console.log(uniques);
}
removeDuplicates(duplicates);