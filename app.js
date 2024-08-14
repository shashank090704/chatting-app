const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
app.set("view engine", "ejs");
app.use(express.static("./public"));

 app.get("/", (req,res)=>{
    res.render("index");
 })
 io.on('connection', (uniquesocket) => {
   console.log('a user connected')
    uniquesocket.on( "message" , (mess)=>{
      console.log(mess);
    uniquesocket.broadcast.emit("sendmess",mess)
    
    })

   uniquesocket.on('disconnect', () => {
      console.log('user disconnected');
    });
 });
 server.listen(3000,()=>{
    console.log("litening on 3000")
 });