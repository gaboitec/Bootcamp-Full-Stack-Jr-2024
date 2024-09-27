//console.log("Che, tu primera practica!!");

/*
function meApretaste(){
    console.log("He che, qué tocas, andá pashá bobo!! >:/");
}

//agarrar los elementos que me intresan del dom
const contenedor = document.querySelector('div');
console.log(contenedor);

const botonApretado = document.getElementById('btnApretame');
meApretaste();

//manipulamos eventos del dom
botonApretado.addEventListener('click', () => {
    if(primerH1.style.color == "black"){
        primerH1.style.color = "blue";
    }else{
        primerH1.style.color = "black";
    }
});

//obtenemos el pirmer hijo del contenedor
console.log(contenedor.firstElementChild);
let primerH1 = contenedor.firstElementChild;
console.log(primerH1.innerText);

//cambiamos el texto de un elemento html
primerH1.innerText = "Hasta la vista beibi";
*/

/*retorna el primer elemento que coincida con ese ID
const container = document.getElementById('container');
container.style.backgroundColor = "grey";*/

/*
const p = document.createElement('p');
p.textContent = 'che, como vas?';
document.body.appendChild(p);

const showMessage = () => {

}

console.log(age) 
    
if (age == 18){ 
    const h1 = document.createElement('h1') 
    h1.textContent = 'Eres mayor de edad, puedes votar' 
    h1.style.color = 'green' 
    document.body.appendChild(h1) 
}
else{ 
    const h1 = document.createElement('h1') 
    h1.textContent = 'Eres menor de edad, no puedes votar' 
    h1.style.color = 'red' 
    document.body.appendChild(h1) 
} 

const getValueSelected = () => { 
    const valueSelected = document.querySelector('input[name="radouGroup"]:checked').value
    console.log(valueSelected)
}*/

const validarForm = (event) => {
    event.preventDefault()

    const fullname = document.getElementById('fullname').value
    const gender = document.getElementById('gender').value
    const email = document.getElementById('email').value
    console.log(fullname, gender, email)

    //validar espacios vacios
    
    if(fullname === ''){
        alert("No name");
        return false;
    }

    if(gender === 'default'){
        alert("No gender");
        return false;
    }

    //validar conteo de caracteres, y correo con expresiones regulares
    if(email === ''){
        alert("No email");
        return false;
    }
}