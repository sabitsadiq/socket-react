const express = require("express");
const http = require("http");

const { server } = require("socket.io");
const cors = require("cors");
const { Socket } = require("dgram");
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("reciever_message", data);
  });
});

server.listen(3001, () => {
  console.log("Server is runing");
});
