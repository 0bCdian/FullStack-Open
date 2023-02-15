import { useEffect, useState } from "react"
import axios from "axios"

export const Country = ({ country }) => {
  const [weather, setWeather] = useState({})
  const languages = Object.values(country.languages)
  const capitalLatitude = country.capitalInfo.latlng[0]
  const capitalLongitude = country.capitalInfo.latlng[1]
  const apiKey = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${capitalLatitude}&lon=${capitalLongitude}&appid=${apiKey}&units=metric`
      )
      .then((response) => response.data)
      .then((data) => setWeather(data))
  }, [country])
  const hasWeather = Object.keys(weather).length
  if (hasWeather === 0) {
    return (
      <>
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
      </>
    )
  }
  return (
    <>
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
      <div>
        <h2>Wheater in {country.capital}</h2>
        <p>Temperature {weather.main.temp} Celsius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt="weather icon"
        />
        <p>Wind {weather.wind.speed} m/s</p>
      </div>
    </>
  )
}
