//Adding One More Element via DOM
const newListItem = document.createElement("li");
const optionalList = document.getElementById("optionalList");
newListItem.textContent = "Cilantro for garnish";
optionalList.appendChild(newListItem);

//Feature 1: Email Recipe button with prompt to enter email address
const emailBtn = document.createElement("button");
emailBtn.type = "button";
emailBtn.innerHTML = "Email me the recipe!";
emailBtn.style.backgroundColor = "#8B0000";
emailBtn.style.color = "white";

const steps = document.getElementById("steps");
steps.appendChild(emailBtn);

function getEmail() {
    let userEmail = prompt("Please enter your email address.");
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Uses regex to make sure email is structured as expected
    if (userEmail.match(validEmail)) {
        return alert(`Thanks! This recipe will be sent to ${userEmail}.`);
    } else {
        return alert("That email address is invalid. Please try again.");
    }
}

emailBtn.addEventListener("click", getEmail);

//Feature 2: Header backgrounds change color when you hover over them
const headersArr = ["h1", "h2", "h3"];

for (let i = 0; i < headersArr.length; i++) {
    let header = document.getElementsByTagName(headersArr[i]);
    for (let j = 0; j < header.length; j++) {
        header[j].classList.add("header");
    }
}

const allHeaders = document.getElementsByClassName("header");

for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "orange";
    });
}

//Feature 3: Toggle encouraging message in and out with mouseover
const hiddenElement = document.createElement("p");
hiddenElement.innerHTML = "<strong>You can do it! Let me know how it goes!</strong>";
hiddenElement.style.backgroundColor = "orange";
hiddenElement.style.color = "#00008B";
hiddenElement.style.fontSize = "1rem";
hiddenElement.style.opacity = 0;

const instructSection = document.getElementById("steps");
instructSection.appendChild(hiddenElement);

hiddenElement.addEventListener("mouseover", () => {
    let currentOpacity = parseFloat(hiddenElement.style.opacity);
    if (currentOpacity === 0) {
        return hiddenElement.style.opacity = 1;
    } else if (currentOpacity === 1) {
        return hiddenElement.style.opacity = 0;
    }
});
