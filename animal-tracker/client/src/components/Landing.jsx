//Import necessary functionalities
import React, { useState, useMemo, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
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
      setShowHealth((prevStatus) => !prevStatus);
    }
    
    //Fetch function to set info for sightings table
    const loadSightings = async () => {
        try {
            const response = await fetch('/tracker/sightings');

            if (response && !response.ok) {
                throw new Error("Failed to fetch sightings");
            }

            const sightingsTableInfo = await response.json();
            setSightings(sightingsTableInfo);
        } catch (error) {
            console.error({ message: "Error loading sightings", details: error });
        }
    }

    //Fetch the sightings info when you load into the page
    useEffect(() => {
        loadSightings();
    }, []);

    return (
        <>
            <Row className="mb-4">
                <Col>
                    <div className="message">
                        <h4>Welcome to our Animal Tracker! Here at the TG Wildlife Research Center, we value all the data we can receive about the endangered animals we are working to protect.</h4>
                    </div>
                </Col>
                
                <Col>
                    <div className="message">
                        <h4>Your account classifies you as a: <em>Scientist</em>. Please use the appropriate forms to log your data. If you notice an error on the forms or our data tables, please fill out a ticket.</h4>
                    </div>
                </Col>
            </Row>

            <div className="list-wrapper">
                {/* Button to toggle between Healthy and All Sightings */}
                <h3>Sightings:</h3> 
                <Button onClick={toggleHealthy}>
                    {showHealth ? "All Sightings" : "Healthy Sightings Only"}
                </Button>
                
                {/* Map out the fetched sightings that need to be shown into <SightingsCard /> */}
                <div className="list">
                    {showHealth
                    ? healthySightings.map((sighting, index) => <SightingsCard key={index} sighting={sighting} />)
                    : sightings.map((sighting, index) => <SightingsCard key={index} sighting={sighting} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Landing