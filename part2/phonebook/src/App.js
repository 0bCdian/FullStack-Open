import { useState } from 'react'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import { Contacts } from './Contacts'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  // set states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')


  useEffect( () =>{
    console.log('Start effect callback!')
    
    const eventHandler = response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    } 
    axios.get('http://localhost:3001/persons') 
    .then(eventHandler)
  }, [])

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
      <h1>Phonebook</h1>
      <Filter handleChangeSearch={handleChangeSearch} />
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h3>Numbers</h3>
      <Contacts persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App