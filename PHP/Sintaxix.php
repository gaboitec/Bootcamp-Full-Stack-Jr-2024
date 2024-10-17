<?php
//Comentario de una línea

/*
    Comentario 
    multilinea
*/

//Variables
//declaracion de variable
$stringVar;

$stringVar = "Che, php si anda";

$intNumber = 73;

$floatNumber = 54.455;

$booleanVar = false;

//imprimir datos
echo $intNumber;

//salto de linea
echo "\n";

print($booleanVar);

//Operadores
$suma = 3 + "3";
print($suma);

//Operadores de concatenacion
$concatString = "Leonel" . "Messi";
print($concatString);

//Template Sring
$nombre = "Messi";
echo "Che, el mejor jugador es {$nombre}";

?>