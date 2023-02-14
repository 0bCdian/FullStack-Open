import { useState } from "react"

export const Country1 = ({ country, initialShowState }) => {
  if (country) {
    // eslint-disable-next-line no-debugger
    const languages = Object.values(country.languages)
    const [isShown, setIsShown] = useState(initialShowState)
    const countryName = country.name.common
    const changeShown = () => {
      setIsShown((prevState) => !prevState)
    }
    if (isShown) {
      return (
        <div>
          <div>
            <h1>{countryName}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
          </div>
          <div>
            <h2>Languages:</h2>
            <ul>
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={country.flags.png}></img>
          </div>
          <button type="button" onClick={changeShown}>
            {isShown ? "hide" : "show"}
          </button>
        </div>
      )
    }
    return (
      <div>
        <span>{countryName}</span>
        <button type="button" onClick={changeShown}>
          {isShown ? "hide" : "show"}
        </button>
      </div>
    )
  }
  return null
}
