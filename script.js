// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to handle button click
function handleClick() {
    // Get a random color
    var randomColor = getRandomColor();

    // Update the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Change the button text
    var button = document.getElementById("clickButton");
    button.textContent = "Clicked See Change Color";
}

// Add a click event listener to the button
var button = document.getElementById("clickButton");
button.addEventListener("click", handleClick);
