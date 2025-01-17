<?php
//Interface segregation -> Segregacion de interfaces
//Si detecta una interface demasiado grande

interface Ave
{
    function comer();
    function dormir();
    function caminar();
    function volar();
}

class Torogoz implements Ave
{
    function comer() {}
    function dormir() {}
    function caminar() {}
    function volar() {}
}

class Penguin implements Ave
{
    function comer() {}
    function dormir() {}
    function caminar() {}
    function volar()
    {
        return new Exception("No puedo volar");
    }
    function nadar() {}
}
