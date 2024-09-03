//Step 8 (which is actually step 11 instead of 10 since 10 is just showing you what happened)
class TicketType {
    constructor(ticketType, price) {
        this.ticketType = ticketType;
        this.price = price;
    }
}

//Step 1

class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = []; //Adding in to later on so that 
    }

    //Step 9 (12)
    addAvailableTickets(ticketType, price) {
        const newTicket = new TicketType(ticketType, price);
        this.availableTickets.push(newTicket);
    }
}

//Step 2
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

//Step 3
const eventObj2 = new Event(
    "Skillet & Sevendust",
    "Victorious war tour"
);

const eventObj3 = new Event(
    "Jenny Lewis",
    "On the line tour 2019"
);

//Step 4
const eventArray = new Array();

//Step 5
//Push a single object:
eventArray.push(eventObj1);

//Push multiple:
eventArray.push(eventObj2, eventObj3);

//Step 6 - console log
console.log(eventArray);

//Step 7
document.addEventListener('DOMContentLoaded', () => {
    //Handler when the DOM is fully loaded
    let html = '';
    //Ensures that html becomes the full list before it appends the full list to the list (rather than one by one)
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description}`;
    });
    //Take the full html list and append it to the ul with class name event (#event)
    document.querySelector('#event').innerHTML = html;
})



