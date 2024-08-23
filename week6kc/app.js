//Updated import statements
import express from 'express';
import fetch from 'node-fetch';
// import axios from 'axios';

const app = express();
const PORT = 5683;

// Replaced 'YOUR_OAUTH_TOKEN' with my actual OAuth token
const oauthToken = 'OB4Z4ZD2SDIQQJK4H2DN';

//Dummy Event Information
const dummyEventId = '1001499059647';

//URL for fetching the dummy event details
const url = `https://www.eventbriteapi.com/v3/events/${dummyEventId}/?expand=`;

//Parameters for the fetch request
const params = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer: ${oauthToken}`,
        'Content-Type': 'application/json'
    }
};

// Example route for fetching ticket availability
const availability = url + 'ticket_availability';

app.get('/ticketavailability', async (req, res) => {
    console.log("Getting ticket availability!");

    try {
        const response = await fetch(availability, params);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching details', details: error });
    }

});

//2 - Example route for fetching ticket class details
const ticketClasses = url + 'ticket_classes';

//3 - Example route for fetching event format
const order = url + 'format';

//4 - Example route for fetching venue details
const venue = url + 'venue';

//5 - Example route for fetching organizer details
const organizer = url + 'organizer';



//Print server information when port detects active server
app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});