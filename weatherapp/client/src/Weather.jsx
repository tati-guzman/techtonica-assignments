//Import React functionality from react package
import React from 'react'
//Import info from App
import './App.jsx'


const Weather = ({weatherData}) => {
    
    //Log weather data passed into this component for debugging
    console.info(weatherData)
    
    return (
        <div>
            {weatherData ? (
                <div>
                    <p>City Name: {weatherData.name}</p>
                    <p>Forecast: {weatherData.weather[0].main}</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp} degrees F</p>
                    <p>Wind: {weatherData.wind.speed} mph</p>
                </div>
                ) : (
                    <p> Weather Data coming soon! </p>
                )}
        </div>
    )
}

export default Weather