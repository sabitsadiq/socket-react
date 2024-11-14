const express = require("express");
const http = require("http");

const { server } = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
  },
});

server.listen(3001, () => {
  console.log("Server is runing");
});
