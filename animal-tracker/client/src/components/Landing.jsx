//Import necessary functionalities
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SightingsCard from './SightingsCard.jsx';

const Landing = () => {

    //State to capture the sightings being displayed
    const [sightings, setSightings] = useState([]);

    //State to capture Healthy Status filter
    const [showHealth, setShowHealth] = useState(false);

    //onClick function for Healthy Sightings Button -> show only healthy sightings
    //set showHealth to true

    //

    
    return (
        <>
           {/* WELCOME MESSAGE  */}

           {/* ERROR FORM MESSAGE */}

           {/* HEALTHY SIGHTING BUTTON: filter through fetched sightings for healthy = true */}
           {/* ALL SIGHTINGS BUTTON: onClick -> set showHealth to false */}

           {/* Map out the fetched sightings that need to be shown into <SightingsCard /> */}
        </>
    )

}