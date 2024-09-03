//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'

const Weather = ({weatherData}) => {

    return (
        <>
            {weatherData ? (
                <div className="weather-container">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{weatherData.name}</p>
                    </div>
                    
                    <div className="details">
                        <p className="weather-type">Forecast: {weatherData.weather[0].main}</p>
                        
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>

                        <p className="temp">Temperature: {weatherData.main.temp}°F</p>
                        
                        {/* <div className="weather-specifics"> */}
                            <div className="humidity">
                                <i className="fa-solid fa-droplet"></i>
                                <p>Humidity: {weatherData.main.humidity}</p>
                            </div>

                            <div className="wind">
                                <i className="fa-solid fa-wind"></i>
                                <p className="wind">Wind: {weatherData.wind.speed}mph</p>                
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                ) : (
                    <p> Weather Data coming soon! </p>
                )}
        </>
    )
}

export default Weather