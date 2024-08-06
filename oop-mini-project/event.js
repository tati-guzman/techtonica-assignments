//STEP 3: Create an Event class
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
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
        html += `<li>${event.name}:<br>${event.description}</li>`;
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
