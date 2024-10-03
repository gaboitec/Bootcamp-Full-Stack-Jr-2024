import { useEffect, useState } from "react"
import { ICountry } from "../models/ICountry";

const APIurl = "https://restcountries.com/v3.1/all"

export const useCountriesData = (region:string, name:string) => {
    const [countries, setCountries] = useState<ICountry[]>([]);

    const getCountries = async () =>{
        //Obtenemos en response los datos(respuesta) de la API con fetch
        const response:Response =await fetch(APIurl);
        //Pasamo' en data los datos de esa resupesta
                //transformados en array de objetos
        const data: ICountry[] = await response.json();
        //consologueamos siempre para saber que onda
        console.log(data);

        let filteredCountries = data;

        if(region){
            filteredCountries = filteredCountries.filter((country) => country.region === region )
        }


        if(name){
            filteredCountries = filteredCountries.filter((country) => country.name.common  === name )
        }

        //le metemo' la data al countries
        setCountries(data);
    }

    useEffect(() => {
        getCountries();
    },[region, name])

    return countries
}

