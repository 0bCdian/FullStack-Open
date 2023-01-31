import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () =>  axios.get(baseUrl)
const deletePerson = (id) => axios.delete(baseUrl+'/' + id)
const createPerson = (personData) => axios.post(baseUrl, personData)
const updatePerson = (id,data) => axios.put(baseUrl + '/' + id, data)
export {getAllPersons,createPerson,deletePerson, updatePerson}