//Import React functionality from react package
import React, { useState } from 'react'
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

    // const [forecast, setForecast] = useState(null);

    //Log weather data passed into this component for debugging
    console.info(weatherData)
    
    // const [icon, setIcon] = useState("");
    

    //Update icon with setIcon //NEED TO FIGURE THIS OUT
    // const iconId = weatherData.weather[0].icon; 
    // setIcon(weatherData.weather[0].icon);
    //  console.log(iconId);
    //  const iconURL = `http://openweathermap.org/img/w/${icon}.png`

    return (
        <div className="info">
            {weatherData ? (
                <div className="weather-container">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>City Name: {weatherData.name}</p>
                    </div>
                    
                    <div className="details">
                        {/* <img src={iconURL}/> */}

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