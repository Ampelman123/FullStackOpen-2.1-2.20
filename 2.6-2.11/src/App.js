import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <div>
      <li>{person.name} {person.number}</li>
    </div>
  )
}
const Persons = ({ persons, search }) => {
  let arr = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) || person.number.includes(search))

  return (
    <div>
      {arr.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}
const Filter = ({ search, addSearch }) => {
  return (
    <div>
      search: <input value={search} onChange={addSearch}></input>
    </div>
  )
}
const Adding = (props) => {
  return(
  <form onSubmit={props.addPerson}>
    <div>
      name: <input value={props.newName} onChange={props.addName} />
    </div>
    <div>
      number: <input value={props.newNumber} onChange={props.addNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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
      setPersons(persons.concat(perObject))
      setNewName('')
      setNewNumber('')
    }


  }

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