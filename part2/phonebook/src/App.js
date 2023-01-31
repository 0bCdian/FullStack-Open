import { useState } from 'react'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import { Contacts } from './Contacts'
import { useEffect } from 'react'
import { getAllPersons , createPerson, deletePerson, updatePerson} from './services/phonebook'

const App = () => {
  // set states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')


  useEffect( () =>{
    getAllPersons().then(response => response.data).then((data)=>{
      setPersons(data)
    })
    
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

  const handleDeletion = (e) => {
    const id = e.target.id
    const name = e.target.name
    if (window.confirm(`Delete ${name}?`)){
      deletePerson(id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // add new user
    if (!checkDuplicates(persons, newName)) {
      const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
      createPerson(newPerson)
      const newPersons = [...persons, newPerson]
      setPersons(newPersons)
      return null
    }
    // update user's phone if it already exists
    if (window.confirm(`${newName} is already in the phonebook, do you want to replace the number?`)) {
      const person = persons.filter((element) => element.name === newName)
      const newPersonData = { name: newName, number: newNumber, id: person[0].id }
      updatePerson(person[0].id, newPersonData)
      return
    }
    else {
      return null
    }
}

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleChangeSearch={handleChangeSearch} />
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h3>Numbers</h3>
      <Contacts persons={persons} newSearch={newSearch} handleDeletion={handleDeletion}/>
    </div>
  )

}

export default App