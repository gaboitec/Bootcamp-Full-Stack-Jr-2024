//creamo nuevo componente
export function GutBai({nombre}){/*sin los parentesis, react lo trata
                                    como un bojeto, las llaves son
                                    para extraer el valor de la propiedad
                                    de ese objeto en lugar de colocar bojeto.propiedad() */
    //props -> recibe << nombre >> del padre "Saludin.jsx"
    
    return<>
            <h2>Chaooo {nombre} cuidate</h2>
            <h3>Vuelve </h3>
        </>
    //SI QUEDA EN BLANCO EL ERROR SE LLAMA 'ERROR BLANCK'
}