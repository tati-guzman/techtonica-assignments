//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'


const WeatherForm = ({setCity}) => {
    
    //Create a state for the text inputted into the search field
    const [inputText, setInputText] = useState("")
    
    //When the user submits data, change the city value and clear the input field
    const handleSubmit = (event) => {
        //Prevent the page from re-loading
        event.preventDefault();
        
        //Print info to console for troubleshooting
        console.log(event);
        console.log(event.target[0].value);
        
        //Update city value with setCity
        setCity(event.target[0].value);

        //Clear the search field
        setInputText("")
      };
    

    return (
        <div className="search">
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