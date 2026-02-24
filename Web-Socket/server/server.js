import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

let users = 0;

io.on("connection", (socket) => {
  users++;
  io.emit("userCount", users);

  socket.on("join", (username) => {
    socket.username = username;

    socket.emit("message", {
      user: "System",
      text: "Welcome to the chat",
      time: new Date().toLocaleTimeString()
    });

    socket.broadcast.emit("message", {
      user: "System",
      text: `${username} joined the chat`,
      time: new Date().toLocaleTimeString()
    });
  });

  socket.on("sendMessage", (text) => {
    io.emit("message", {
      user: socket.username,
      text,
      time: new Date().toLocaleTimeString()
    });
  });

  socket.on("disconnect", () => {
    users--;
    io.emit("userCount", users);

    if (socket.username) {
      io.emit("message", {
        user: "System",
        text: `${socket.username} left`,
        time: new Date().toLocaleTimeString()
      });
    }
  });
});

server.listen(5000, () => {
  console.log("Server running on port 3000");
});