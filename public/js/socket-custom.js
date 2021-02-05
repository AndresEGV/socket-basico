var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});
//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');

});

//Enviar información

socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});