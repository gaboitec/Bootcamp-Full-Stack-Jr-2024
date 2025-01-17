<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <?php include './views/layouts/navbar.php' ?>
    <main class="container mt-2">
        <h1>Agregar producto</h1>

        <section class="card col-8 p-2">
            <article class="d-flex justify-content-center">
                <form action="./index.php?action=create" method="POST" class="form">
                    <lavel for="" class="form-label">Nombre:</lavel>
                    <input type="text" class="form-control" name="nombre" />
                    <lavel for="" class="form-label">Precio:</lavel>
                    <input type="text" class="form-control" name="precio" />
                    <lavel for="" class="form-label">Descuento:</lavel>
                    <input type="text" class="form-control" name="descuento" />
                    <lavel for="" class="form-label">Cantidad:</lavel>
                    <input type="text" class="form-control" name="cantidad" />
                    <div class="pt-2">
                        <button class="btn btn-success" type="submint">Agregar</button>
                        <a class="btn btn-danger" href="./home.php">Cancelar</a>
                    </div>
                </form>
            </article>
        </section>
    </main>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>