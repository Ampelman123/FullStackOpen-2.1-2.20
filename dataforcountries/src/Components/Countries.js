import Country from './Country'
import CountryDetail from './CountryDetail'

const Countries = ({ countries, visu }) => {
    console.log('countries in countries:',countries)
    function Visualize({ countries }) {
        if(countries.length > 15){
            return(
                <div>Too many countries, pls specify</div>
            )
        }
        if (1 < countries.length && countries.length < 15) {
            return (
                <div>
                    <h1>Countries</h1>
                    {countries.map(country =>
                    <Country key={country.name} country={country} />
                    )}
                </div>
                
                
            )
        }
        if (countries.length === 1) {
            return (
                <CountryDetail country={countries[0]} />
            )
        }else {
            console.log(countries.length)
            return(<div>loading..</div>)
        }
        
        
    }

    return (
        <div>
            <Visualize countries={countries} visu ={visu}/>
        </div>
    )
}
export default Countries