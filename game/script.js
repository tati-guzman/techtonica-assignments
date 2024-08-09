//Manipulating the images via the button:

//Make an array with all the pet images
const petImages = document.getElementsByClassName("pet");

//Define each pet image using the array
const daisy = petImages[0];
const luke = petImages[1];
const han = petImages[2];

//Set all three visibilities to hidden
daisy.style.visibility = "hidden";
luke.style.visibility = "hidden";
han.style.visibility = "hidden";

//Increasing the Stats Counter

//Assign variable names to each counter element using their ID's
let totalCountElement = document.getElementById("totalcount");
let daisyCountElement = document.getElementById("daisycount");
let lukeCountElement = document.getElementById("lukecount");
let hanCountElement = document.getElementById("hancount");

//Create and set each count variable to 0;
let totalCount = 0;
let daisyCount = 0;
let lukeCount = 0;
let hanCount = 0;

//Create the function for the logic from the button click to show/hide random pictures and update stats
function randomWinner(){
    
    //Update total number of clicks
    totalCount++;
    totalCountElement.innerHTML = totalCount;

    //Generate a random number from 0-2
    let winningIndex = Math.floor(Math.random() * 3);
     
    //Loop through array of pet images and change winning image to visible
    for (let i = 0; i < petImages.length; i++) {
        if (i === winningIndex) {
            petImages[winningIndex].style.visibility = "visible";
        } else {
            //Change other image visibility to hidden
            petImages[i].style.visibility = "hidden";
        }
    }

    //Update winning counter
    switch (winningIndex) {
        case 0:
            daisyCount++;
            break;
        case 1:
            lukeCount++;
            break;
        case 2:
            hanCount++;
            break;
    }

    //Set innerHTML equal to current counters
    daisyCountElement.innerHTML = daisyCount;
    lukeCountElement.innerHTML = lukeCount;
    hanCountElement.innerHTML = hanCount;
}

//Set an event listener to capture the click and the resulting logic
const button = document.getElementById("button");
button.addEventListener("click", randomWinner);



