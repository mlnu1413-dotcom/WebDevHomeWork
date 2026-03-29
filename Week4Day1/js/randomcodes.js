function randomCode() {
    // Function to wrap our scripts for code verification
    
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    
    for (var i = 0; i < 8; i++) {
        // Generate one random character at a time
        var randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    
    // Display the random code on the page
    document.querySelector('.code-display').textContent = randomString;
}

// Generate random code when page loads
window.onload = function() {
    randomCode();
};
