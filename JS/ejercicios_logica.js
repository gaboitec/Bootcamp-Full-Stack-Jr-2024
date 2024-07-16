//Dado un array de enteros, sumar los elementos pares y devolver si esta suma es > 20

let arraycito = [15, 40, 20, 57, 25, 17, 10];
let suma = 0;

for(cont = 0; cont < arraycito.length; cont++){
    if(arraycito[cont]%2 == 0){
        suma = suma + arraycito[cont];
    }

    if(suma > 20){
        return true;
    }
    else{
        return false;
    }
}


//fizzbuss
//escribir un programa que imrpima los numerso del 1-100
//si el numero es multipo de 5 imprimir buzz
//si el numero es mutliplo de 3 imrpimir fizz
//si es multiplo de amos >> fizzbuzz
//caso contrario solo imprimir el numero

for(cont = 1; cont <= 100; cont++){
    console.log(fizzBuzz(cont));
}

function fizzBuzz(numero){
    if(numero % 5 == 0 && numero % 3 == 0){
        return "fizzbuzz";
    }
    else if(numero % 3 == 0){
        return "fizz";
    }
    else if(numero % 5 == 0){
        return "buzz";
    }
    else{
        return numero;
    }
}

//*****************************/

//Funcion que devuelve suma de pares de un arreglo

let numeros = [9,10,23,43,44,54,66];

function suma_pares(arreglo){
    let suma = 0;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 == 0){
            suma += arreglo[i];
        }
    }

    return suma;
}

console.log(suma_pares(numeros));
//con map
function sumaParesMap(arre){
    let suma = 0;
    arre.map((valor)=>{valor % 2 == 0 ? suma += valor: console.log("Paso algo extraño");})
    return suma;
}
arre1 = [1,2,3,4,5,6,7,15,18,21];
impr1=sumaParesMap(arre1)
console.log(impr1)

//funcion que retorna elemento maximo en un arreglo

function maximo(array){
    let maximo = array[0];

    for(let i = 1; i < array.length; i++){
        if(maximo < array[i]){
            maximo = array[i];
        }
    }

    return maximo;
}

console.log(maximo(numeros));

