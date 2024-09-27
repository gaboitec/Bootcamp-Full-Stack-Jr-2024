//ejercicios #1
function cambiarEstilo(color){
    let element = document.getElementById('textColor');
    element.style.color = color;
    element.style.fontSize = '20px';
}

//ejercicio #2
function crearElemento(){
    let element = document.createElement('li');
    element.textContent = document.getElementById('inputTask').value;
    document.getElementById('olTask').appendChild(element);
    document.getElementById('inputTask').value = "";
}

//ejercicio #3
function eliminarElemento(id){
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
}
