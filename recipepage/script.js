//Adding One More Element via DOM
const newListItem = document.createElement("li");
const optionalList = document.getElementById("optionalList");
newListItem.textContent = "Cilantro for garnish";
optionalList.appendChild(newListItem);