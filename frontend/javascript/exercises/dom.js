// 1.Selecting elements

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

// 2.Modifying elements

// change text content
// change style

myElement.style.color = "blue";
myElement.style.fontSize = "20px";

title[0].textContent = "Updated Title";

// 3. Modifying structure

var newDiv = document.createElement("div");
newDiv.textContent = "Loading... Please wait.";
newDiv.style.fontWeight = "bold";
newDiv.style.border = "2px solid black";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";

document.body.appendChild(newDiv);

// 4.Reading vs writing DOM state

// update text
// read input value
// update value elsewhere

var userInput = document.getElementById("userInput");
var displayInput = document.getElementById("displayInput");

userInput.addEventListener("input", function() {
    displayInput.textContent = "You typed: " + userInput.value;
});

// 5. Classes & styling

// add class
// remove class
// toggle class

var toggleButton = document.getElementById("toggleButton");
var box = document.getElementById("box");

toggleButton.addEventListener("click", function() {
    box.classList.toggle("highlight");
});
