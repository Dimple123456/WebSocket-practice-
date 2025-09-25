const http = require("http");
const express = require('express');
const path = require('path');
const {Server} = require("socket.io");3


const app = express();
const server = http.createServer(app);
const io = new Server(server);

//socket.io
io.on("connection", (socket) => {
    // console.log("A new user has connected" , socket.id);
    socket.on('user-msg', (message) => {
        // console.log("A new User Meassage ", message)
        io.emit("message", message)
    });
})

app.use(express.static(path.resolve('./public')));

app.get("/", (req,res) => {
    return res.sendFile('./public/index.html')
})

server.listen(9000 , () => console.log(`server started at port : 9000`))