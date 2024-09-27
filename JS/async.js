const { asyncify } = require("async");

const btnAsync = document.getElementById('btnAsync');

//SetTimeOut -> demorar la ejecucion
btnAsync.addEventListener('click', () => {
    setTimeout(() => {
        console.log("Che como andas");
    },2000);
    console.log("Me apretaste");
})

//Promises











//Manipulacion de asinconismo
//Then y catch
funcionAsincrona().then((mensaje) => {console.log(mensaje)});

//Asinc y Await
async function ejecutarTareaAsincrona(){
    const resultado = await funcionAsincrona();
    console.log(resultado);
}
ejecutarTareaAsincrona();

//uso fetch
function peticionFetch(){
    //enviar a fetch a busar los datos de la API
    fetch("https://pokeapi.com/api/v2/pokemon/ditto")
    .then(
        (Response) => {
            console.log(response);
            return Response.json()
        }
    )
    .then(data => {
        //manimpulamos la información que me trae esta respuesta
        console.log(data)
    })
    .catch((error) => {
        //el hermano nos da las malas noticias
        console.error("Che, obtuvimos un error!", error)
    })
}

peticionFetch();

async function petitionAwait(){
    try{
        let response = await fetch("")
        let data = await response.json();
        console.log(data);
    }catch(eror){
        console.error("Che, este es otro error", error);
    }
}

peticionAwait();