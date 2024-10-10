const forms = document.getElementById('classForm');

// Add an event listener to the submit button
document.querySelector('.button').onclick = function(event) {
    event.preventDefault(); // Prevent default form submission

    // Check form validity
    if (!forms.checkValidity()) {
        // Show validation error message
        displayToastNotification(
            "Please fill in all required fields.", 
            "fa fa-exclamation-triangle", 
            "#f39c12", 
            "slide-in-fade-out"
        );
    } else {
        // Show success message
        displayToastNotification(
            "Registration successful!", 
            "fa fa-check", 
            "#27ae60", 
            "slide-in-slide-out"
        );

        // Redirect to payment.html after a delay
        setTimeout(function() {
            window.location.href = "payment.html";
        }, 2000); // 2-second delay before redirect
    }
};


var toastCounter = 1;

function displayToastNotification( msg, icon, icon_color, animation ) {
	var class_name = 'toast-'+toastCounter;
	var new_node;

	new_node = $('.master-toast-notification').clone().appendTo('.toasts').addClass(class_name + ' toast-notification').removeClass('master-toast-notification');
	new_node.find('.toast-msg').text(msg);
	new_node.find('.toast-icon i').addClass(icon);
	new_node.find('.toast-icon').addClass('wiggle-me').css('background-color', icon_color);
	new_node.removeClass('hide-toast').addClass(animation);
	setTimeout(function() {
		new_node.remove();
	}, 3800);
	toastCounter++;
}