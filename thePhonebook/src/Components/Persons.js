import Person from './Person'
const Persons = ({ persons, search, deleteNumber}) => {
  console.log(persons);
    let arr = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) || person.number.includes(search))
  
    return (
      <div>
        {arr.map(person =>
          <Person key={person.name} person={person} deleteNumber={deleteNumber}/>
        )}
      </div>
    )
  }
export default Persons