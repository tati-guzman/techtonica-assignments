import { useEffect, useState } from 'react'
import './App.css'
import Weather from './Weather.jsx'

function App() {
  
  const [weather, setWeather] = useState(null)

  //Fetch Details
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <h1>Weather data:</h1>

      <Weather data={weather}/>
      
      <h2>This is working on the front end!</h2>
    </>
)}

export default App
