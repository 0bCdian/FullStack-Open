import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '123-456'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Helper function 
  const checkDuplicates = (personsArray, name) => {
    const results = personsArray.filter((person) => person.name === name)
    return results.length > 0
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
      const newPersons = [...persons, { name: newName, number: newNumber }]
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
          name: <input onChange={handleChangeName} />
        </div>
        <div> number: <input onChange={handleChangeNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>{person.name} {person.number}</p>
        )
      })}
    </div>
  )
}

export default App