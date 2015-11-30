var socket = io();

socket.on('connect', function () {
	console.log('connected to the server');
});


socket.on('message', function (message) {
	console.log('new Message');
	console.log(message.text);
});

//

var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault();

	var $message = $form.find('input[name=messageBox]')
	socket.emit('message',{
		text: $message.val()
	})

	$message.val('');
});