//Import styling sheets and frameworks
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Import React functionalities
import React, { useState } from 'react';

//Import all components for use in display
import TopNavBar from './components/TopNavBar.jsx';
import Landing from './components/Landing.jsx';
import Individuals from './components/Individuals.jsx';
import Species from './components/Species.jsx';
import Sightings from './components/SightingsForm.jsx';

function App() {

  //State to hold displayed component
  const [component, setComponent] = useState("landing");
  
  //Function to control displayed component
  /*
  function chooseComponent {
    switch statement:
      if XXXX is clicked:
        return <ComponentName />
    }
  */
  
  return (
    <div className="App">
      
      <TopNavBar setComponent={setComponent}/>

      {/* Displayed component is decided based on function - triggered by NavBar buttons */}
      <div className="wrapper">
        {chooseComponent}
      </div>
      
    </div>
  )
}

export default App
