/*
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

*/


const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' },
{ id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' },
{ id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' },]

for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id == 11 || placesToTravel[i].id == 40) {
        placesToTravel.splice(i, 1);
        i--;
        //Si borramos un elemento, retrocedemos de nuevo una posición para que no de error ya que de lo contrario saltaría una posición
        //Ej. Si se borra el elemento 2, el elemento que era el 3 pasa ahora a ser el 2. 
    }
}
console.log(placesToTravel);
