import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Countries.jsx'
//Importar como variable, el archivo
//Con llaves para aclarar el cambio
import {Saludin} from './components/Saludin';
import { Countries } from './components/Countries.jsx'
//colocar as "otroNombre" para utilizarlo con otro nombre

//NOMBRES DE ARCHIVOS CON INICIAL MAYUSCULA!!

/*Para mostrar un componente en la vista, 
lo cargamos en el << App.jsx >>*/

function App() {

  //Hook -> Metodo declarativo que nos da una funcion en especifico
  //INVESTIGAR BONDADES DE REACT

  /*Estado -> Una cajita en donde se puede guardar 
  un dato mutable(cambiable) y vive hasta el desmontaje*/
  //Se representa con el << Hook useState() >> 

  //nombreEstado -> Nombre de nuestra variable
  //cambiarValorEstado -> Funcion para cambiar el valor del estado
  //useState (Valor Inicial)
  const [nombreEstado, cambiarValorEstado] = useState("Yefry");

  return (
    //↓↓↓Fragment -> <> </> DELIMITADORES CONTENEDORES

    <>
      <h1>Che {nombreEstado} ya estamo' viendo riact</h1>
      <button onClick={() => cambiarValorEstado("Gabriel")}>Cambiamela</button>
      <Saludin nombreUsuario={nombreEstado} />
      <Countries />
    </> //llamar al componente como una etiqueta
    //la propiedad nombreUsuario es creado por nosotros en el componente

    /*El return solo puede devolver una cosa, entonces
      solo debe de devolver el fragmento el cual puede devolver
      varios elementos y el lenguaje lo entiende como uno solo
      lo que tiene dentro del fragmento*/
  )
}

export default App

