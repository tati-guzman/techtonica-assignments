//Import React functionality from react package
import React from 'react'
//Import info from App
import './App.jsx'
//Import weather icons from assets folder
// import cloudy from './assets/cloudy.png'
// import rainy from './assets/rainy.png'
// import snowy from './assets/snowy.png'
// import sunny from './assets/sunny.png'


const Weather = ({weatherData}) => {
    
    // const forecastOptions = {"Clear": sunny, "Clouds": cloudy, "Rain": rainy, "Snow": snowy, "Haze": cloudy, "Mist": cloudy};
    // const alt = {
    //     sunny: "bright yellow sun with two flames on either side", 
    //     cloudy:"four white bubbly clouds with part of a cartoon sun poking out behind the clouds", 
    //     rainy: "one gray cloud with four blue raindrops falling out surrounded by four yellow lightning bolts",
    //     snowy: "two gray clouds with several blue snowflakes"
    // }

    //Log weather data passed into this component for debugging
    console.info(weatherData)
    
    return (
        <div className="info">
            {weatherData ? (
                <div className="weather-container">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>City Name: {weatherData.name}</p>
                    </div>
                    
                    <div className="details">
                        <img src={`${forecastOptions[`${forecast}`]}`} alt={`${alt`${forecastOptions[`${forecast}`]}`}`} />

                        <p className="weather-type">Forecast: {weatherData.weather[0].main}</p>
                        
                        <p className="temp">Temperature: {weatherData.main.temp}°F</p>
                        
                        <div className="weather-specifics">
                            <div className="humidity">
                                <i className="fa-solid fa-droplet"></i>
                                <p>Humidity: {weatherData.weather[0].description}</p>
                            </div>

                            <div className="wind">
                                <i className="fa-solid fa-wind"></i>
                                <p className="wind">Wind: {weatherData.wind.speed}mph</p>
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