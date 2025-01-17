<?php
class Product
{
    //representacion de los valores de la tabla
    public $id;
    public $name;
    public $price;
    public $discount;
    public $quantity;
    //conexion a la bd
    public $conection;
    //tabla a elegir:
    public $table_name = "productos";

    public function __construct($db)
    {
        $this->conection = $db;
    }

    public function read()
    {
        $query = "SELECT * FROM {$this->table_name}";
        $sentence = $this->conection->prepare($query);
        $sentence->execute();
        return $sentence;
    }

    public function create()
    {
        $query = "INSERT INTO {$this->table_name} SET nombre=\"{$this->name}\", precio={$this->price}, descuento={$this->discount}, cantidad={$this->quantity}";
        $sentence = $this->conection->prepare($query);
        $sentence->execute();
        return $sentence;
    }

    public function update($id)
    {
        $query = "UPDATE {$this->table_name} 
                    SET nombre=\"{$this->name}\", precio={$this->price}, descuento={$this->discount}, cantidad={$this->quantity}
                    WHERE id={$id}";
        $sentence = $this->conection->prepare($query);
        if ($sentence->execute())
            return true;
        return false;
    }

    public function findOne($id)
    {
        $query = "SELECT * FROM {$this->table_name} WHERE id={$id}";
        $sentence = $this->conection->prepare($query);
        $sentence->execute();
        return $sentence;
    }

    public function delete()
    {
        $query = "DELETE FROM {$this->table_name} WHERE id={$this->id}";
        $sentence = $this->conection->prepare($query);
        $sentence->execute();
        return $sentence;
    }
}
