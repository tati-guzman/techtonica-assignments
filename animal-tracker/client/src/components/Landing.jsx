//Import necessary functionalities
import React, { useState, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import SightingsCard from './SightingsCard.jsx';

const Landing = () => {

    //State to capture the sightings being displayed
    const [sightings, setSightings] = useState([]);

    //State to capture Healthy Status filter
    const [showHealth, setShowHealth] = useState(false);

    //Use Memoization to store the array of healthy sightings so long as the sightings state doesn't change
    const healthySightings = useMemo(() => {
        return sightings.filter((sighting) => 
            sighting && typeof sighting.healthy === 'boolean' ? sighting.healthy : false);
    }, [sightings]);

    //onClick function for Healthy Sightings Button -> toggle between healthy sightings and all sightings by simply switching it to the opposite state
    const toggleHealthy = () => {
      setShowHealth(!showHealth);
    }
    
    return (
        <>
           {/* WELCOME MESSAGE - Change header level? Wrap in its own div for styling? */}
           <h3>Welcome to our Animal Tracker! Here at the TG Wildlife Research Center, we value all the data we can receive about the endangered animals we are working to protect.</h3>

           {/* ERROR FORM MESSAGE - wrap in its own div? Separate into two elements: h4 and p? */}
           <h4>Your account classifies you as a: <em>Scientist</em>. Please use the appropriate forms to log your data. If you notice an error on the forms or our data tables, please fill out a ticket.</h4>

           {/* HEALTHY SIGHTING BUTTON: filter through fetched sightings for healthy = true */}
           {/* ALL SIGHTINGS BUTTON: onClick -> set showHealth to false */}

           <Button onClick={toggleHealthy}>
            {showHealth ?
            "All Sightings" :
            "Healthy Sightings Only"}
           </Button>

           {/* Map out the fetched sightings that need to be shown into <SightingsCard /> */}
           {showHealth ?
           healthySightings.map((sighting) => <SightingsCard sighting={sighting} />) :
           sightings.map((sighting) => <SightingsCard sighting={sighting} />)
           }
        </>
    )
}

export default Landing