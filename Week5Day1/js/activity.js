$(document).ready(function() {
    // Select all table cells in tbody (excluding header cells)
    var tableCells = $('table tbody td');
    
    // Add click event to selectable cells
    tableCells.click(function() {
        var $cell = $(this);
        var cellText = $cell.text().trim();
        
        // Don't allow selection for "Not Available" cells
        if (cellText === 'Not Available') {
            return;
        }
        
        // Toggle highlight on click
        if ($cell.hasClass('selected')) {
            // Remove highlight if already selected
            $cell.removeClass('selected');
        } else {
            // Add highlight if not selected
            $cell.addClass('selected');
        }
    });
    
    // Add hover effect and cursor for selectable cells
    tableCells.hover(
        function() {
            var $cell = $(this);
            var cellText = $cell.text().trim();
            
            // Only show hand cursor for selectable cells (not "Not Available")
            if (cellText !== 'Not Available') {
                $cell.css('cursor', 'pointer');
            }
        },
        function() {
            // Reset cursor on mouse leave
            $(this).css('cursor', 'default');
        }
    );
    
    // Initial setup - set cursor for all non-"Not Available" cells
    tableCells.each(function() {
        var $cell = $(this);
        var cellText = $cell.text().trim();
        
        if (cellText !== 'Not Available') {
            $cell.css('cursor', 'pointer');
        }
    });
});
