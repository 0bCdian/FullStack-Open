import axios from "axios";

const baseURl = 'http://localhost:3001/persons'

const getAllPersons = () =>  axios.get(baseURl)

const createPerson = (personData) => axios.post(baseURl, personData)
export {getAllPersons,createPerson}