var toastCounter = 1;

$('button').on('click', function() {
	var msg = $(this).attr('msg');
	var icon = $(this).attr('icon');
	var icon_color = $(this).attr('icon-color');
	var animation = $(this).attr('animation');

	displayToastNotification(msg, icon, icon_color, animation);
});

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
        window.location.href = 'payment.html'; 
	}, 3800);
    
	toastCounter++;
}