const { io } = require('../server');



io.on("connection", (client) => {
    console.log("Usuario conectado");

    client.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a esta aplicacion",
    });

    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    //Esuchar cliente
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: "todo salio bien",
        //     });
        // } else {
        //     callback({
        //         resp: "TODO SALIO MAL!!!",
        //     });
        // }
    });
});