let cursoCarrito = [];
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

function agregarCurso(evento){
    console.log("Estoy agregando curso...");
    let cursoSeleccionado = evento.target.parentElement.parentElement;
    leerDatoCurso(cursoSeleccionado);
}

function leerDatoCurso(curso){
    console.log(curso.querySelector('h5').textContent);

    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
    }

    //comprobarpreviamente si el curso ya existe
    const existe = cursoCarrito.some((curso) => curso.id == infoCurso.id);

    //si existe, aumentar cantidad, si no, agregamos
    if(existe){
        cursoCarrito.map((curso) => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }
        })
    }else{
        cursoCarrito.push(infoCurso);
    }
    
    console.log(cursoCarrito)
    pintarCarrito();
}

function pintarCarrito(){
    contenedorCarrito.innerHTML = '';

    cursoCarrito.map( (curso) => {

        //crear nuevo elemento tr
        const fila = document.createElement('tr');

        //asignar valores del curso a cada columna
        fila.innerHTML = ` 
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>`



        //agregar la fila al contendor del carrito
        contenedorCarrito.appendChild(fila);
    })
}





function vaciarCarrito(e){
    e.preventDefault();
    cursoCarrito = [];
    contenedorCarrito.innerHTML = ``
}

function eliminarcurso(){
    //
    //
    cursoCarrito.map(curso => {
        //si el curso existe
        if(curso.id == id){
            //sisi la cantidad de ese curso es mayor a 1
            if(curso.cantidad > 1){
                //reducimos su cantidad en 1
                curso.cantidad--;
                return curso;
            }else{
                //va a filtrar y guardar en cursocarrito toso los que sean diferentes a ese curso
                cursoCarrito = cursoCarrito.filter(curso => curso.id != id);
            }
        }
    })
    pintarCarrito();
}