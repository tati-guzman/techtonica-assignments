import React from 'react'
import './App.jsx'
import { useState } from 'react'


const WeatherForm = ({setCity}) => {
    const [inputText, setInputText] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target[0].value);
        setCity(event.target[0].value);
        setInputText("")
      };
    

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter city name"
                    label="cityName"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
        
        </div>
    )
}

export default WeatherForm