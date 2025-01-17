<?php
class Database
{
    public $host = "localhost"; //PUERTO
    public $db = "tiendita"; //base de datos
    public $userName = "root"; //Usuario
    public $password = ""; //contrasenia
    //$dsn = mysql:host={puerto};bdname={baseDeDatos}
    private $conn;

    public function getConection()
    {
        try {
            $this->conn = new PDO("mysql:host={$this->host};dbname={$this->db}", $this->userName, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo $exception->getMessage();
        }
        return $this->conn;
    }
}
