const socketio = require("socket.io");

exports.hello = async (event, context) => {
  const io = socketio.Server();
  io.on("connection", (sock) => {
    console.log("Client Connected.");
    sock.on("message", (data) => {
      console.log("Recieved data '"+String(data)+"'");
    });
    sock.emit("greeting", "hello");
  });
  return {
    statusCode: 200,
    body: 'Socket.io server running on netlify!'
  };
};