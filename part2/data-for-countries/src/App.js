import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Display } from "./Display"
import { Filter } from "./Filter"

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => response.data)
      .then((data) => setCountries(data))
      .catch((err) => console.log("error", err))
  }, [])

  const handleSearch = (e) => {
    const filter = e.target.value
    setSearchFilter(filter.toLowerCase())
  }

  return (
    <div>
      <h1>Data For countries</h1>
      <Filter handleSearch={handleSearch} />
      {countries.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Display countriesArr={countries} searchFilter={searchFilter} />
        </div>
      )}
    </div>
  )
}

export default App
