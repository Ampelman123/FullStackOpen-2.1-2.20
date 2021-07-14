const Person = ({ person, deleteNumber }) => {
    return (
      <div>
        <li>{person.name} {person.number} <button onClick={()=>deleteNumber(person.id)} value={person.id}>delete</button></li>
      </div>
    )
  }
  export default Person