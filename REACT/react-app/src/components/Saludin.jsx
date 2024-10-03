import {GutBai} from './GutBai.jsx';
//Crear nuevo COMPONENTE JSX
//esLint-disable-next-line react/prop-types
//Entre parentesis la prop que se trajo del componente App en llaves como objeto
export function Saludin({nombreUsuario}){ /*EL COMPONENTE DEBE SER MAYUSCULA 
                      PARA QUE EL NAVEGADOR NO LO CONFUNDA
                      CON UNA ETIQUTEA Y DE ERROR PORQUE NO EXISTE*/
  
  //props -> Propiedades que se reciben desde otro componente y son dinamicos
  return <>
    <h1>Che {nombreUsuario} este es el saludin</h1>
    <GutBai nombre={nombreUsuario}/>
  </>
}

/*Tambien se puede exportar como
  export default Saludin */