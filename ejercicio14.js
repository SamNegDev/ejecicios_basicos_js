/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

*/
const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];
function repeatCounter(list) {
    const counters = {}
    for (const element of list) {
        if (!(element in counters)) {
            counters[element] = 1;
        } else {
            counters[element] += 1;
        }
    }
    console.log(counters);
}
repeatCounter(words);