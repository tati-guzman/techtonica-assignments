//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'

const Weather = ({weatherData}) => {

    return (
        <div className="info">
            {weatherData ? (
                <div className="weather-container">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>City Name: {weatherData.name}</p>
                    </div>
                    
                    <div className="details">
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>

                        <p className="weather-type">Forecast: {weatherData.weather[0].main}</p>
                        
                        <p className="temp">Temperature: {weatherData.main.temp}°F</p>
                        
                        <div className="weather-specifics">
                            <div className="humidity">
                                <p>Humidity: {weatherData.main.humidity}</p>
                                {/* <i className="fa-solid fa-droplet"></i> */}
                            </div>

                            <div className="wind">
                                <p className="wind">Wind: {weatherData.wind.speed}mph</p>
                                {/* <i className="fa-solid fa-wind"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <p> Weather Data coming soon! </p>
                )}
        </div>
    )
}

export default Weather