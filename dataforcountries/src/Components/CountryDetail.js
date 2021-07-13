

const CountryDetail = ({country, weather}) => {
    console.log(country.name);
    return(
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages </h2>
            <div>{country.languages.map(language =><li key={language.name}>{language.name}</li>)}</div>
            <img src={country.flag} alt="pic"height="240"width="352"/>
            <h2>Weather in {country.name}</h2>
            <div><strong>temperature: </strong>{weather.current.temperature}</div>
            <img src={weather.current.weather_icons} alt="pic"/>
            <div><strong>wind: </strong>{weather.current.wind_speed}</div>

        </div>
    )
}
export default CountryDetail