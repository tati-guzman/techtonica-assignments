import React from 'react'
import './App.jsx'

// {weather ? (
    // <div>
    //   <p>{weather}</p>
    {/* <p>City Name: {weather.data.name}</p> */}
    {/* <p>Forecast: {weather.weather[0].main}</p> */}
    {/* <p>Description: {weather.weather[0].description}</p> */}
    {/* <p>Temperature: {weather.main.temp} degrees F</p> */}
    {/* <p>Wind: {weather.wind.speed} mph</p> */}
    // </div>
//   ) : (
    // <p> Loading... </p>
//   )}


const Weather = ({data}) => {
    return (
        <div>
        
        <p>{data}</p>
        
        </div>
    )
}

export default Weather