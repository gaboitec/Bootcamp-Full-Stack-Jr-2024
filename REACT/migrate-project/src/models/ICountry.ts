/*
    REPRESEANTAR EL OBJETO => MODELO 
                            Va a contener todo lo cumpla las caracteristicas 

    country
        name.common
        flags.png
        capital
        region
        languajes[]
*/

/*el model es la representacion de un dato (objeto) a 
manipular/guardar */

export interface ICountry{
    name: {common:string},
    flags: {svg:string},
    capital: string[],
    region: string,
    languaje?: {eng?:string}
}