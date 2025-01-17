<?php
//Interface segregation -> Segregacion de interfaces
//Si detecta una interface demasiado grande

interface Avecita
{
    function comer();
    function dormir();
    function caminar();
}

interface AveVoladora
{
    function volar();
}

interface AveNadadora
{
    function nadar();
}

class Torogoz implements Avecita, AveVoladora
{
    function comer() {}
    function dormir() {}
    function caminar() {}
    function volar() {}
}

class Dodo implements Avecita
{
    function comer() {}
    function dormir() {}
    function caminar() {}
}

class Penguin implements Avecita, AveNadadora
{
    function comer() {}
    function dormir() {}
    function caminar() {}
    function nadar() {}
}
