import React from 'react'
import './App.jsx'




const Weather = ({data}) => {
    console.info(data)
    return (
        <div>
        
        {data ? (
        <div>
        
            <p>City Name: {data.name}</p>
            <p>Forecast: {data.weather[0].main}</p>
            <p>Description: {data.weather[0].description}</p>
            <p>Temperature: {data.main.temp} degrees F</p>
            <p>Wind: {data.wind.speed} mph</p>
        </div>
  ) : (
    <p> Loading... </p>
  )}
        
        </div>
    )
}

export default Weather