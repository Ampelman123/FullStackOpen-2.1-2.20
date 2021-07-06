import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <div>
      <li>{person.name} {person.number}</li>
      
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "069-420-123456"
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    setNewName(event.target.value)

  }

  const addNumber = (event) => {
    setNewNumber(event.target.value)

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
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={addName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={addNumber} />
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