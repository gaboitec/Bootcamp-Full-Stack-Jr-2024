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
        //variablet temporal para fibonacci anterior 1 y 2
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


// #2 => Serie de Fibonacci:
