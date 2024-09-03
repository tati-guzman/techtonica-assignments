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
                    
                    <div className="details-wrapper">
                        <p>Forecast: {weatherData.weather[0].main}</p>
                        
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>

                        <p>Temperature: {weatherData.main.temp}°F</p>
                        
                        {/* <div className="weather-specifics"> */}
                            <div className="details">
                                <i className="fa-solid fa-droplet"></i>
                                <p>Humidity: {weatherData.main.humidity}%</p>
                            </div>

                            <div className="details">
                                <i className="fa-solid fa-wind"></i>
                                <p>Wind: {weatherData.wind.speed}mph</p>                
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