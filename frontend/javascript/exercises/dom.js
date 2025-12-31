// Selecting elements

// select element by id
// select elements by class
// log text before change

var myElement = document.getElementById("myElement");

var title = document.getElementsByClassName("title");

console.log("Before changes: " + myElement.textContent);

setTimeout(function() {
myElement.textContent = "New Text Content";
console.log("After changes: " + myElement.textContent);
newDiv.remove();
}, 2500);

// Modifying elements

// change text content
// change style

myElement.style.color = "blue";
myElement.style.fontSize = "20px";

title[0].textContent = "Updated Title";

// Creating and appending elements

var newDiv = document.createElement("div");
newDiv.textContent = "Loading... Please wait.";
newDiv.style.fontWeight = "bold";
newDiv.style.border = "2px solid black";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";

document.body.appendChild(newDiv);
