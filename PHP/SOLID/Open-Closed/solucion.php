<?php
interface IAuto
{
    function aumentarVel();
}

class PilotoRally
{
    function acelerar(IAuto $auto)
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
