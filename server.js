var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var now = moment();

var currentTime = now.format('h:mm a');

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('connected');

	socket.on('message', function (message){
		

		console.log('message sent is' + message.text);
		//io.emit to send message even to the sender
		//socket.broadcast.emit('message',message);
		message.timestamp = moment().valueOf();
		io.emit('message',message);
	});

	socket.emit('message', {
		name: 'System',
		text: 'Welcome to fun',
		timestamp: moment().valueOf()
	});
});

http.listen(PORT, function (){
	console.log('Server Started');
});