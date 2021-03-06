
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room') || 'Anonymous';
console.log(name);
console.log(room);
var socket = io();
jQuery('.room-title').text(room);

socket.on('connect', function () {
	console.log('connected to the server');
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});


socket.on('message', function (message) {
	var momentTimestamp = moment.utc(message.timestamp);
	
	var $messages = jQuery('.messages');
	var $message = jQuery('<li class="list-group-item"></li>')
	console.log('new Message');
	console.log(message.text);
	
	$message.append('<p>' + '<strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + ' </strong>' + '</p>')
	$message.append('<p>' + message.text + '</p>');
	$messages.append($message);
});

//

var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault();

	var $message = $form.find('input[name=messageBox]')
	socket.emit('message',{
		name: name,
		text: $message.val()
	})

	$message.val('');
});