<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <title>Edit</title>
</head>

<body style="padding: 2% 10%">
    <h1>Edit Article</h1>

    <form action='{{url("/articles/$article->id")}}' method="POST">
        @csrf
        @method('PUT')
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title" value="{{$article->title}}">
        <label for="content">Description</label>
        <input type="text" name="description" placeholder="Content" value="{{$article->description}}">
        <label for=" text" name="stock">Stock</label>
        <input type="text" name="stok" placeholder="stock" value="{{$article->stock}}">
        <button type=" submit">Save</button>
</body>

</html>