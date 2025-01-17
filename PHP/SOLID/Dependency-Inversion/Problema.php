<?php
/*Los modulos de alto nivel nodeben depender de los
modulos de bajo nivel*/

class ConexionBD
{
    protected $adaptador;
    protected $adaptador2;

    function __construct()
    {
        $this->adaptador = new MysQL;
        $this->adaptador2 = new MongoDB;
    }

    function conectar() {}
}

class MySQL {}

class MongoDB {}
