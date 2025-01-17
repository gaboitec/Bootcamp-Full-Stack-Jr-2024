<?php
require_once './config/database.php';
require_once './models/model.php';

class ProductController
{
    public $product;
    public $db;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConection();
        $this->product = new Product($this->db);
    }

    public function read()
    {
        $sentence = $this->product->read();
        $products = $sentence->fetchAll(PDO::FETCH_ASSOC);
        include './views/home.php';
    }

    public function create()
    {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $this->product->name = $_POST['nombre'];
            $this->product->price = $_POST['precio'];
            $this->product->discount = $_POST['descuento'];
            $this->product->quantity = $_POST['cantidad'];

            if ($this->product->create()) {
                header('Location: ./index.php');
            } else {
                echo "Error al crear";
            }
        } else {
            require './views/create.php';
        }
    }

    public function update($id)
    {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $this->product->name = $_POST['nombre'];
            $this->product->price = $_POST['precio'];
            $this->product->discount = $_POST['descuento'];
            $this->product->quantity = $_POST['cantidad'];

            if ($this->product->update($id)) {
                header('Location: ./home.php');
            } else {
                echo "Error al editar";
            }
        } else {
            $sentence = $this->product->findOne($id);
            $product = $sentence->fetch(PDO::FETCH_ASSOC);
            require './views/update.php';
        }
    }

    public function delete($id)
    {
        $this->product->id = $id;

        $this->product->delete();

        header('Location: ./home.php');
    }
}
