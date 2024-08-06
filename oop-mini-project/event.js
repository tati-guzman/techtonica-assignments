//STEP 3: Create an Event class
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    //STEP 12: Add a function to create ticket types for this event
    addAvailableTickets(section, price) {
        const newTicket = new TicketType(section, price);
        this.availableTickets.push(newTicket);
    }

    //STEP 14: Add a function to return a string representing all ticket types and prices
    allTickets() {
        //Create an array where each element will now be the full description needed per ticket
        let ticketInfo = this.availableTickets.map(({section, price}, index) => (`${index + 1}. ${section} ($${price})`));
       
        console.log(ticketInfo); //Using console log to double check work

        //Return the string to be added to the HTML element
        //Adding <br> throughout to arrange line breaks
        return `<br>All Tickets:<br> ${ticketInfo.join("<br>")}<br><br>`;
    }
}

//STEP 4: Create an object using the class
const eventObj1 = new Event(
    "Green Day",
    "2024 Tour: Performing the album 'Dookie' in its entirety"
);

//STEP 5: Create a few more objects with different values
const eventObj2 = new Event(
    "Blink-182",
    "2023-2024 World Tour: A medley of their best set list so far"
)

const eventObj3 = new Event(
    "Ed Sheeran",
    "Mathematics Tour: His version of the Eras Tour that really should not have been a stadium tour"
)

//STEP 6: Create an empty array
const eventArray = new Array();

//STEP 7: Push the objects into the array (single and multiple)

//Pushing a single object:
eventArray.push(eventObj1);
//Pushing multiple objects at once:
eventArray.push(eventObj2, eventObj3);

//STEP 8: Check the array using console log
console.log(eventArray);

//STEPS 9 & 10: Iterate through the event array to add it to the page
document.addEventListener("DOMContentLoaded", () => {
    let html = "";
    eventArray.forEach((event) => {
        html += `<li>${event.name}:<br>${event.description}<br>${event.allTickets()}</li>`;//Added allTickets() for STEP 15
    });
    document.querySelector("#event").innerHTML = html;
})

//STEP 11: Create a class TicketType to store the name and price of a ticket

class TicketType {
    constructor(section, price) {
        this.section = section;
        this.price = price;
    }
}

//STEP 13: Add different ticket types to each event

//First Event Tickets:
eventObj1.addAvailableTickets("Section 314", 75);
eventObj1.addAvailableTickets("General Admission", 285);

//Second Event Tickets:
eventObj2.addAvailableTickets("VIP", 475);
eventObj2.addAvailableTickets("Section 117", 150);

//Third Event Tickets:
eventObj3.addAvailableTickets("Section 252", 120);
eventObj3.addAvailableTickets("Floor", 250);