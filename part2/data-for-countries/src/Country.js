export const Country = ({ country }) => {
  const languages = Object.values(country.languages)
  if (country) {
    return (
      <div>
        <div>
          <h1>{country.name.common}</h1>
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
      </div>
    )
  }
}
