import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    console.log(newName)
    setNewName(event.target.value)

  }
  const addPerson = (event) => {
    event.preventDefault()
    const perObject = {
      name: newName
    }
    let arr = persons.map(y=>y.name)
    if (arr.includes(newName)) {
      window.alert(`${newName} is already in your phonebook!`);
    } else {
      setPersons(persons.concat(perObject))
      setNewName('')
    }


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={addName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App