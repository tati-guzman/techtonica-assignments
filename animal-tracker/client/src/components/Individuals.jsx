//Import necessary functionalities and components
import React, { useEffect, useState } from 'react';
import IndividualCard from './IndividualCard.jsx';
import IndividualsForm from './IndividualsForm.jsx';

const Individuals = () => {

    //State to capture the individuals being displayed
    const [allIndividuals, setAllIndividuals] = useState([]);

    //Fetch function to set info for individuals table
    const loadIndividuals = async () => {
        try {
            const response = await fetch('/tracker/individuals');

            if(!response.ok) {
                throw new Error ("Failed to fetch individuals table");
            }

            const individualsTableInfo = await response.json();
            setAllIndividuals(individualsTableInfo);            
        } catch (error) {
            console.error({ message: "Error loading tracked individuals", details: error });
            alert("Oops, sorry about that. Seems our animals are escaping us! Please try again to load information about individuals.");
        }
    }

    //Fetch the individuals info when you render the component
    useEffect(() => {
        loadIndividuals();
    }, [])

    //State to capture selected individual for update
    const [selectedIndividual, setSelectedIndividual] = useState(null);

    return (
        <>
            <div>
                <h2>All Tracked Individuals</h2>
                {allIndividuals.map((individual, index) => (
                    <IndividualCard key={index} individual={individual} setSelectedIndividual={setSelectedIndividual} setAllIndividuals={setAllIndividuals} allIndividuals={allIndividuals} />
                ))}
            </div>
            
            <div>
                <h2>Individuals Form</h2>
                <IndividualsForm selectedIndividual={selectedIndividual} setSelectedIndividual={setSelectedIndividual} setAllIndividuals={setAllIndividuals}/>
            </div>
        </>
    )
}

export default Individuals