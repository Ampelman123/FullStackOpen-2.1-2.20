import React, { useState, useEffect } from 'react'
import Persons from './Components/Persons'
import Adding from './Components/Adding'
import Filter from './Components/Filter'
import numberService from './services/numbers'



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
    console.log('name', newName, 'number', newNumber);
    const perObject = {
      id: (persons.length + 1),
      name: newName,
      number: newNumber
    }
    let arr = persons.map(y => y.name)
    if (arr.includes(newName)) {
      window.alert(`${newName} is already in your phonebook!`);
    } else {
      numberService.create(perObject)
        .then((res) => {

          setPersons(persons.concat(perObject))
          setNewName('')
          setNewNumber('')
          console.log('name', newName, 'number', newNumber);
        }
        )

    }


  }
  useEffect(() => {
    console.log('effect')
    numberService
      .getAll()
      .then(res => {
        console.log('promise fulfilled')
        setPersons(res)
        console.log('promise fulfilled')
      })
  }, [])

  const deleteNumber = (value) => {
    
    if (window.confirm('Do you really want to delete this number??')) {
      console.log(value);
      numberService
        .deletion(value)
        .then(res => {
          console.log(res)
          setPersons(persons.filter(p => p.id !== value))
        })
    }

  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} addSearch={addSearch} />
      <h2>Add new contact</h2>
      <Adding addName={addName} addNumber={addNumber} addPerson={addPerson} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} deleteNumber={deleteNumber} />
    </div>
  )
}

export default App