//Updated import statements
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 5683;

// Replaced 'YOUR_OAUTH_TOKEN' with my actual OAuth token - need to set in env file
const oauthToken = 'OB4Z4ZD2SDIQQJK4H2DN';

//Dummy Event Information
const dummyEventId = '1001499059647';

//URL for fetching the dummy event details
const url = `https://www.eventbriteapi.com/v3/events/${dummyEventId}/?expand=`;

//Parameters for the fetch request
const params = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${oauthToken}`,
        'Content-Type': 'application/json'
    }
};

// Example route for fetching ticket availability
const availability = url + 'ticket_availability';

app.get('/ticketavailability', async (req, res) => {
    console.log("Getting ticket availability!");

    try {
        console.info(params);
        const response = await fetch(availability, params);
        const data = await response.json();
        res.json(data.ticket_availability);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching details', details: error });
    }

});

//2 - Example route for fetching ticket class details
const ticketClasses = url + 'ticket_classes';

app.get('/ticketclass', async (req, res) => {
    console.log("Getting ticket class information!");

    try {
        const response = await fetch(ticketClasses, params);
        const data = await response.json();
        res.json(data.ticket_classes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching details', details: error });
    }

});

//3 - Example route for fetching event type
const eventType = url + 'format';

app.get('/eventType', async (req, res) => {
    console.log("Getting event type!");

    try {
        const response = await fetch(eventType, params);
        const data = await response.json();
        res.json(data.format);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching details', details: error });
    }

});

//4 - Example route for fetching venue details
const venue = url + 'venue';

//5 - Example route for fetching organizer details
const organizer = url + 'organizer';



//Print server information when port detects active server
app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});