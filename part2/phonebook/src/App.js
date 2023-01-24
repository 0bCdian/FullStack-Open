import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const handleChange = (e) => {
    const name = e.target.value;
    setNewName(name)
  }
  const checkDuplicates = (personsArray, name) => {
    const results = personsArray.filter((person) => person.name === name)
    return results.length > 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!checkDuplicates(persons, newName)) {
      const newPersons = [...persons, { name: newName }]
      setPersons(newPersons)
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} >
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>{person.name}</p>
        )
      })}
    </div>
  )
}

export default App