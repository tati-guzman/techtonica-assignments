//Import React hooks needed for app
import { useEffect, useState } from 'react'
//Import CSS Stylesheet
import './App.css'
//Import all components
import Weather from './Weather.jsx'
import WeatherForm from './WeatherForm.jsx'

function App() {
  
  //States will track weather data and target city
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('');

  //Upon change to city state, fetch data from API
  useEffect(() => {
    //Print city information to console
    console.info("city", city)

    //If there is no city inputted now, exit the function
    if (!city) {
      return;
    }

    //Create parameters for the query with the city name
    const queryParams = {
      city: city
    };

    //URLSearchParams returns a string containing a query string suitable for a URL
    const encodedQueryParams = new URLSearchParams(queryParams).toString();
    console.log(encodedQueryParams);

    //Fetch request includes city via query params
    fetch(`/api?${encodedQueryParams}`)
      //Convert returned data into JSON format
      .then((res) => res.json())
      //Change weather state to the data object within the stats returned from the api
      .then((stats) => setWeather(stats.data))
      //If there is an error, log it to the console
      .catch((err) => console.log(err)); //Future change: Make sure to include an error for the user as well!
  }, [city])

  return (
    <>
      <h2>Need a Rain Check?</h2>
      
      <WeatherForm setCity={setCity}/>

      <Weather weatherData={weather}/>
    </>
)}

export default App
