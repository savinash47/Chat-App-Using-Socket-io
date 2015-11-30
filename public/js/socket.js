var socket = io();

socket.on('connect', function () {
	console.log('connected to the server');
});


socket.on('message', function (message) {
	console.log('new Message');
	console.log(message.text);
});