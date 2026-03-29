// Group all variables in one area
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var randomString = "";
var getCode;
var btnvalue;

function generateCode() {
    randomString = "";
    
    for (var i = 0; i < 8; i++) {
        // Generate one random character at a time
        var randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    
    // Display the random code on the page
    document.querySelector('.code-display').textContent = randomString;
}

function disableButton(btnvalue) {
    var submitBtn = document.querySelector('.button input[type="submit"]');
    
    if (btnvalue) {
        // If disabled, the button will appear grayed out
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = '#cccccc';
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.style.opacity = '0.6';
    } else {
        // If enabled, the button will have a full color active appearance
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '#5a7fca';
        submitBtn.style.cursor = 'pointer';
        submitBtn.style.opacity = '1';
    }
}

function evaluateCode() {
    // Get the character entered
    getCode = document.querySelector('.randomcode input[type="text"]').value;
    
    // Ensure there are no hidden characters on both codes entered and generated
    var enteredCode = getCode.trim();
    var generatedCode = randomString.trim();
    
    // Test if the characters entered (including total number) matches what's generated
    if (enteredCode === generatedCode && enteredCode.length === 8) {
        // If conditions are met, reverse the current status of the submit button
        disableButton(false); // Enable the button
    } else {
        disableButton(true); // Disable the button
    }
}

// Generate random code and disable button when page loads
window.onload = function() {
    generateCode();
    disableButton(true); // Pass Boolean value of true to disable button initially
    
    // Add event listener to the input field
    document.querySelector('.randomcode input[type="text"]').addEventListener('input', evaluateCode);
};
