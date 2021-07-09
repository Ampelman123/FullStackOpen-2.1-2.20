

const CountryDetail = ({country}) => {
    console.log(country.name);
    return(
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages </h2>
            <div>{country.languages.map(language =><li key={language.name}>{language.name}</li>)}</div>
        </div>
    )
}
export default CountryDetail