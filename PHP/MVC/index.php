<?php
require_once './controller/controller.php';
$controller = new ProductController();

$action = isset($_GET['action']) ? $_GET['action'] : "read";
$id = isset($_GET['id']) ? $_GET['id'] : '';

if ($action == "create") {
    $controller->create();
} else if ($action == "read") {
    $controller->read();
} else if ($action == "update") {
    $controller->update($id);
} else if ($action == "delete") {
    $controller->delete($id);
}


//echo "holi";
print($action);
