<?php
//Liskov Sustitution -> Principio de sustitucion de Liskov
//

class Persona
{
    function comer() {}

    function dormir() {}

    function correr() {}

    //cuando sos mayor a 18
    function getDui() {}

    function trabajar() {}
}

class Bebe extends Persona
{
    function getDui()
    {
        return new Exception("No tengo DUI aún");
    }
}
