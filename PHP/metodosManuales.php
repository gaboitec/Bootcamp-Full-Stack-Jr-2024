<?php
$array1 = [32, 3, 43, 23, 5, 64];
$array2 = ["y", "e", "f", "r", "y"];

//Array_unique elimina datos repetidos de un array

$arrayNuevo = [$array2[0]];
for ($i = 0; $i < count($array2) - 1; $i++) {
    for ($j = $i + 1; $j < count($array2); $j++) {
        if ($array2[$i] != $array2[$j]) {
            array_push($arrayNuevo, $array2[$j]);
        }
    }
}

print_r($arrayNuevo);

//Array_merge combina 2 o más arrays

$arrayNuevo = $array1 + $array2;

print_r($arrayNuevo);

//Array_reduce reduce todo el array a un solo dato sumando todos los valores


//Array_search Busca un dato en especifico en el array

//Array_slice Corta un array tomando como refencia una posicion

//Array_reverse Da vuelta los valores de un array

//Array_map Recorre el array y ejecuta una funcion por cada posicion
