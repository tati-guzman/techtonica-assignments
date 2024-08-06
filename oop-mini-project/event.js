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
    "Mathematics Tour: his version of the Eras Tour that really should not have been a stadium tour"
)


