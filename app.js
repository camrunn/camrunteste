
var app = require('./config/server');

var server = app.listen(3000, function(){
    console.log('[+] Run.');
});

var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', function(socket){
    socket.on('disconnect', function(){
        
    });
    
    /* Chat connections */
    socket.on('sendToServer', function(data){
        socket.broadcast.emit('getMessage', data);
    });


    socket.on('streaming', function(data){
        socket.broadcast.emit('sendStreaming', data);
    });
});
