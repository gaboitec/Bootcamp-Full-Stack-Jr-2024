<?php
interface IAdaptador
{
    function conexion();
}

class ConexionBD
{
    protected $adaptador;

    function __construct(IAdaptador $adaptadorParam)
    {
        $this->adaptador = $adaptadorParam;
    }

    function conectar()
    {
        $this->adaptador->conexion();
    }
}

class MySQL implements IAdaptador
{
    function conexion()
    {
        //formas de conectar a mysql
    }
}

class MongoDB implements IAdaptador
{
    function conexion()
    {
        //formas de conectar a mongodb
    }
}
