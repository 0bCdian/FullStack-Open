import { useState } from 'react'

const App = () => {
  // set states
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '123-456',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  // Helper functions
  const checkDuplicates = (personsArray, name) => {
    const results = personsArray.filter((person) => person.name === name)
    return results.length > 0
  }

  // eventHandlers
  const handleChangeSearch = (e) => {
    const search = e.target.value;
    setNewSearch(search)
  }

  const handleChangeName = (e) => {
    const name = e.target.value;
    setNewName(name)
  }

  const handleChangeNumber = (e) => {
    const number = e.target.value;
    setNewNumber(number)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!checkDuplicates(persons, newName)) {
      const newPersons = [...persons, { name: newName, number: newNumber, id: persons.length + 1 }]
      setPersons(newPersons)
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleChangeSearch} />
      </div>
      <div> <h2>Add a new</h2></div>
      <form onSubmit={handleSubmit} >
        <div>
          name: <input onChange={handleChangeName} />
        </div>
        <div> number: <input onChange={handleChangeNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))
        .map((person) => {
          return (
            <p key={person.id}>{person.name} {person.number}</p>
          )
        })}
    </div>
  )
}

export default App