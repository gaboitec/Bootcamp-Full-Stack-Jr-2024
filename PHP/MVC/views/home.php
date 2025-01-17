<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arquitectura MVC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <?php include './views/layouts/navbar.php' ?>
    <?php //print_r($products) 
    ?>
    <main class="container mt-2">
        <h1>Inventario</h1>
        <a class="btn btn-warning" href="./index.php?action=create">Agregar producto</a>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Acctiones</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($products as $product): ?>
                    <tr>
                        <th scope="row"><?= $product['id'] ?></th>
                        <td><?= $product['nombre'] ?></td>
                        <td><?= $product['precio'] ?></td>
                        <td><?= $product['descuento'] ?></td>
                        <td><?= $product['cantidad'] ?></td>
                        <td><a class="btn btn-warning" href="./index.php?action=update&id=<?= $product['id'] ?>">Editar</a></td>
                        <td><a class="btn btn-danger" href="./index.php?action=delete&id=<?= $product['id'] ?>">Eliminar</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>