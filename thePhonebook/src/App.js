import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Components/Persons'
import Adding from './Components/Adding'
import Filter from './Components/Filter'



const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addName = (event) => {
    setNewName(event.target.value)

  }

  const addNumber = (event) => {
    setNewNumber(event.target.value)

  }
  const addSearch = (event) => {
    setSearch(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const perObject = {
      name: newName,
      number: newNumber
    }
    let arr = persons.map(y => y.name)
    if (arr.includes(newName)) {
      window.alert(`${newName} is already in your phonebook!`);
    } else {
      axios
        .post('http://localhost:3001/persons', perObject)
        .then(()=>{
          setPersons(persons.concat(perObject))
          setNewName('')
          setNewNumber('')
        }
        )
      
    }


  }
  useEffect(()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fulfilled')
        setPersons(res.data)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} addSearch={addSearch} />
      <h2>Add new contact</h2>
      <Adding addName={addName}addNumber={addNumber}addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App