<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <title>Create</title>
</head>

<body style="padding: 2% 10%">
    <h1>Add Article</h1>

    <form action="{{url('/articles')}}" method="POST">
        @csrf
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title">
        <label for="content">Description</label>
        <input type="text" name="description" placeholder="Description">
        <label for="text" name="stock">Stock</label>
        <input type="text" name="stock" placeholder="Image">
        <button type="submit">Add</button>
</body>

</html>