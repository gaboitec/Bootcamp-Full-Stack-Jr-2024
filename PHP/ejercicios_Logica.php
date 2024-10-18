<?php
// ****** Ejercicios de logica ******

// #1 => Serie de Fibonacci:
//Creacion de funncion
function generar_Fibonacci($numero)
{
    //si es 1 o 0
    if ($numero < 2) {
        return $numero; //retorna el numero
    } else { //si es => 2
        //variables temporales de fibonacci anterior 1 y 2
        $fibo1 = 0;
        $fibo2 = 1;
        //ciclo for para sumar de forma secuencial
        for ($i = 2; $i <= $numero; $i++) {
            //variable fibonacci que almacenará las sumas fib1 y fib2
            $fibonacci = $fibo1 + $fibo2;
            $fibo1 = $fibo2; //toma el valor de fib2
            $fibo2 = $fibonacci; //toma el valor de la suma reciente
        }
        return $fibonacci; //retorna la suma fibonacci
    }
}

echo generar_Fibonacci(6);

// #2 => Número primo:
//creacion de la funcio
function esPrimo($numero)
{
    //recorrer el numero con ciclo for
    for ($i = 2; $i < $numero; $i++) {
        //si $numero se divide entre 2 hasta $número -1, no es primo
        if ($numero % $i == 0) {
            echo $numero . " No es primo";
            break;
        }
        //si no, es primo
        else {
            echo $numero . " Si es primo";
            break;
        }
    }
}

esPrimo(10);

// #3 => Palindromo
//crear funcion
function esPalindromo($palabra)
{
    //convertir la palabra en un array
    $array = str_split($palabra);
    print_r($array);
    //variable contador que va a ir de reversa
    $reversa = count($array) - 1;
    //recorrer el array con for
    for ($i = 0; $i < count($array) / 2; $i++) {
        //si la primera letra y la ultima mp son iguales
        if ($array[$i] != $array[$reversa]) {
            echo "No es palíndromo";
            return;
        }
        //restar a la variable reversa;
        $reversa = $reversa - 1;
    }
    //si todos los extremos son iguales
    echo "Sí es palíndromo";
}

esPalindromo("reconocer");
