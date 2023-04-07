const numeros = [5, 10, 15, 20];

function promedio(array) {
    let suma = 0;
    if (array == " ") {
        return 0}
    else {
    for (i = 0; i < array.length; i++) {
        suma += array[i];
    }
    }
    return suma/array.length;
}


let resultado = promedio(numeros);
resultado = resultado.toFixed(2);
console.log(resultado); // 12.5

