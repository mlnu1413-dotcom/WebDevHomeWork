$(document).ready(function() {
    // Array to store selected activities
    let selectedActivities = [];
    
    // Add click event listeners to table cells (excluding first column and "Not Available" cells)
    $('tbody td').click(function() {
        const cell = $(this);
        const cellText = cell.text().trim();
        
        // Don't allow selection of first column (activity names) or "Not Available" cells
        if (cell.index() === 0 || cellText === "Not Available") {
            return;
        }
        
        // Toggle selection
        if (cell.hasClass('selected')) {
            // Deselect activity
            cell.removeClass('selected');
            removeActivityFromList(cellText);
        } else {
            // Select activity
            cell.addClass('selected');
            addActivityToList(cell, cellText);
        }
    });
    
    // Function to add activity to the display list
    function addActivityToList(cell, activityName) {
        // Get the activity name from the first column of this row
        const activityType = cell.parent().find('td:first-child').text();
        
        // Get the cliff name from the table header based on column index
        const columnIndex = cell.index();
        const cliffName = $('thead th').eq(columnIndex).text();
        
        // Format as "Activity Name at Cliff Name"
        const fullActivityName = `${activityName} at ${cliffName}`;
        
        // Add to array if not already present
        if (!selectedActivities.includes(fullActivityName)) {
            selectedActivities.push(fullActivityName);
            updateDisplayBox();
        }
    }
    
    // Function to remove activity from the display list
    function removeActivityFromList(activityName) {
        // Remove the activity from the array using exact match
        selectedActivities = selectedActivities.filter(activity => 
            !activity.includes(activityName)
        );
        updateDisplayBox();
    }
    
    // Function to update the display box
    function updateDisplayBox() {
        const displayBox = $('#selected-activities');
        
        if (selectedActivities.length === 0) {
            // Hide display box if no activities selected
            displayBox.hide();
        } else {
            // Show display box and update content
            displayBox.show();
            const activityList = $('#activity-list');
            activityList.empty();
            
            selectedActivities.forEach(activity => {
                // Split the activity string to highlight the cliff name
                const parts = activity.split(' at ');
                if (parts.length === 2) {
                    const activityName = parts[0];
                    const cliffName = parts[1];
                    activityList.append(`<li>${activityName} at <span class="cliff-name">${cliffName}</span></li>`);
                } else {
                    // Fallback for any unexpected format
                    activityList.append(`<li>${activity}</li>`);
                }
            });
        }
    }
    
    // Initial setup - hide display box
    $('#selected-activities').hide();
    
    // Inquiry button functionality
    $('#inquiry-btn').click(function() {
        const email = $('#email').val().trim();
        const messageDiv = $('#inquiry-message');
        
        // Clear previous messages
        messageDiv.hide();
        messageDiv.removeClass('success error info');
        
        // Validate email
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Check if any activities are selected
        if (selectedActivities.length === 0) {
            showMessage('Please select at least one activity before sending an inquiry.', 'info');
            return;
        }
        
        // Simulate sending inquiry (in a real application, this would send to a server)
        const inquiryData = {
            email: email,
            activities: selectedActivities,
            timestamp: new Date().toISOString()
        };
        
        console.log('Inquiry data:', inquiryData);
        
        // Show success message
        showMessage(`Thank you! Your inquiry about ${selectedActivities.length} activity(ies) has been sent to ${email}. We'll contact you soon with more information.`, 'success');
        
        // Clear the email field
        $('#email').val('');
    });
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Function to show messages
    function showMessage(message, type) {
        const messageDiv = $('#inquiry-message');
        messageDiv.text(message);
        messageDiv.addClass(type);
        messageDiv.show();
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(function() {
                messageDiv.fadeOut();
            }, 5000);
        }
    }
});
