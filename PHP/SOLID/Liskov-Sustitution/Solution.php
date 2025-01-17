<?php
//Liskov Sustitution -> Principio de sustitucion de Liskov
//

class Adulto extends Persona
{
    function getDui() {}
}

class Bebe extends Persona
{
    public $tutor;

    function __construct(Adulto $tutorParam)
    {
        $this->tutor = $tutorParam;
    }

    function getDui() {}
}
