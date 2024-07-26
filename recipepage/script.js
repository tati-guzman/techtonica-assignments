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
    return prompt("Please enter your email address.");
}

emailBtn.addEventListener("click", getEmail);

//Feature 2: Header backgrounds change color when you hover over them

//Feature 3: Hidden content - click on Recipe Prep and reveal box with message