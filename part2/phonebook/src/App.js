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

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPersons = [...persons, { name: newName }]
    setPersons(newPersons)
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