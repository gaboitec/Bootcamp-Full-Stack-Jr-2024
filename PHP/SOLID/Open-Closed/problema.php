<?php
/*
  Principio de abierto/cerrado
  clase abierta para extension y cerrada a modificacion
 */

class PilotoRally
{
    function acelerar(Citroen $auto)
    {
        $auto->aumentarVel();
    }
}

class Citroen
{
    protected $vel = 0;

    function aumentarVel()
    {
        $this->vel += 10;
    }
}

class Ford
{
    protected $vel = 0;

    function aumentarVel()
    {
        $this->vel += 15;
    }
}
