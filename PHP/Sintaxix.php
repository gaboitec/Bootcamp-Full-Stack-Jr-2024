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

//Funciones
//Declaracion de funcion
function nombreFuncion()
{
    echo "Soy la funcion y me estoy ejecutando";
}
//Llamada a la funcion
nombreFuncion();

//Declaracion de funcion con Parametros

function funcionConParam($nombreParam)
{
    print($nombreParam);
}

funcionConParam("Jairo");

//Funcion con Return tipo string
function funcionConReturn()
{
    echo "Si me estoy ejecutando \n";
    return "Holis";
}
echo funcionConReturn();

//Funciones Anonimas
//Funcion expresada
$funcionAnon = function () {
    echo "Soy una funcion anonima";
};

$funcionAnon();

//Funcion Flecha
$funcionFlecha = fn($a, $b) => ($a
    + $b);
echo $funcionFlecha(3, 3);
