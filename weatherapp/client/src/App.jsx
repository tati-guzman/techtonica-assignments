import { useEffect, useState } from 'react'
import './App.css'
import Weather from './Weather.jsx'
import WeatherForm from './WeatherForm.jsx'

function App() {
  
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('');

  //Fetch Details
  useEffect(() => {
    console.info("city", city)
    if (!city) {
      return;
    }

    const queryParams = {
      city: city
    };

    const encodedQueryParams = new URLSearchParams(queryParams).toString();
    console.log(encodedQueryParams);

    fetch(`/api?${encodedQueryParams}`)
      .then((res) => res.json())
      .then((data) => setWeather(data.data))
      .catch((err) => console.log(err));
  }, [city])

  return (
    <>
      <WeatherForm setCity={setCity}/>

      <h1>Weather data:</h1>

      <Weather data={weather}/>
      
      <h2>This is working on the front end!</h2>
    </>
)}

export default App
