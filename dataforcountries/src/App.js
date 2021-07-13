import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import Countries from './Components/Countries'
function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  const addSearch = (event) => {
    event.preventDefault()
    console.log('add search', search);
    setSearch(event.target.value)
  }
  const alterSearch = (value) => {
    value.preventDefault()
    console.log('alter search', value);
    setSearch(value.target.value)

  }



  useEffect(() => {
    if (search === '') {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(res => {
          console.log('if')
          const countryname = res.data[0].name
          setCountries(res.data)
          console.log('countries:', countries)
          console.log('length of countries:', countries.length)
          axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countryname}`)
            .then(res => {
              console.log('weather',res.data)
              setWeather(res.data)
            })
          
        })
        
        
    } else {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(res => {
          console.log('else')
          setCountries(res.data)
        })

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <div>
      <h1>Search a country</h1>
      <Filter search={search} addSearch={addSearch} />

      <Countries countries={countries} alterSearch={alterSearch} weather={weather} />
    </div>
  );
}

export default App;
