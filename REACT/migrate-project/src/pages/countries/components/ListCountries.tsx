import {ICountry} from '../../../models/ICountry'
import {CardCountry} from './CardCountry';

interface ICountryProp{
    countries: ICountry[];
}

export const ListCountries:React.FC<ICountryProp> = ({countries}) => {
    return(
        <>
            {countries.map((country, index) => <section key={index}><CardCountry country={country} /></section>)}
        </>
    )
}
