/* npm install socket.io 
  npm install http-server -g (Pequeno servidor de arquivos estáticos) e iniciar pelo http-server
*/

var io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Novo usuário conectado!');

  socket.on('client_hello', (data) => {
    //console.log(data);
    io.sockets.emit('server_hello', data);
  })
});

/* O socket emit só enviaria a mensagem para o PRÓPRIO cliente que enviou a messagem! socket.emit
O Broadcast.emit irá enviar a mensagem para todos os clientes conectados, menos você mesmo / socket.broadcast.emit
Para também vermos a mensagem, utilizar o io.sockets.emit();
*/