import { Country } from "./Country"
import { useEffect, useState } from "react"
import { updateSearchFilter } from "./services/helpers"
import { Country1 } from "./Country1"

export const Display = ({ countriesArr, searchFilter }) => {
  // eslint-disable-next-line no-alert, no-unused-vars
  const [initialCountries, setInitialCountries] = useState(countriesArr)
  const [countriesToDisplay, setCountriesToDisplay] = useState([])
  useEffect(() => {
    if (searchFilter === "") {
      setCountriesToDisplay([])
    } else {
      updateSearchFilter(initialCountries, searchFilter, setCountriesToDisplay)
    }
  }, [searchFilter])

  const countriesLength = countriesToDisplay.length
  if (countriesLength === 0) {
    return null
  } else if (countriesLength === 1) {
    return (
      <div>
        <Country country={countriesToDisplay[0]} />
      </div>
    )
  } else if (countriesLength > 1 && countriesLength < 11) {
    return (
      <div>
        <ul>
          {countriesToDisplay.map((pais) => {
            return (
              <li key={pais.name.common}>
                <Country1 country={pais} initialShowState={false} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <p>Too many results</p>
      </div>
    )
  }
}
