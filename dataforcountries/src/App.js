import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import Countries from './Components/Countries'
function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const addSearch = (event) => {
    event.preventDefault()
    console.log('add search',search);
    setSearch(event.target.value)
  }
  const alterSearch = (value) =>{
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
          setCountries(res.data)
          console.log('countries:',countries)
          console.log('length of countries:',countries.length)
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
  },[search])
  return (
    <div>
      <h1>Search a country</h1>
      <Filter search={search} addSearch={addSearch} />
      
      <Countries countries={countries} alterSearch={alterSearch}/>
    </div>
  );
}

export default App;
