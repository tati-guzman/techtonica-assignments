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
    "Green Day Concert",
    "2024 Tour: Performing the album 'Dookie' in its entirety"
);


