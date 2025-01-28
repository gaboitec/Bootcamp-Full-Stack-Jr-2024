<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <title>Home</title>
</head>

<body style="padding: 2% 10%">
    <h1>Che que onda</h1>
    <a href="{{url('/articles/create')}}"><button>Add article</button></a>

    <section>
        <table>
            <thead>
                <th>ID</th>
                <th>Tittle</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Actions</th>
            </thead>
            <tbody>
                @foreach($article as $article)
                <tr>
                    <td>{{$article->id}}</td>
                    <td>{{$article->title}}</td>
                    <td>{{$article->description}}</td>
                    <td>{{$article->stock}}</td>
                    <td>
                        <a href='{{url("/articles/$article->id")}}'><button>Edit</button></a>
                    </td>
                    <td>
                        <form method="POST" action='{{url("/articles/$article->id")}}'>
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button></a>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </section>

</body>

</html>