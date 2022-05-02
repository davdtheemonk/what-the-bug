const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors());
const http= require('http');
require('dotenv').config();
const uri = process.env.ATLAS_URI;
const mongoose = require('mongoose')
const {Server}= require('socket.io');
const server = http.createServer(app);
const io  = new Server(server);
const ACTIONS = require("../src/Actions")




mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("DB connected successfully")
})
const workspaceRouter = require("./routes/workspaces")
const usersRouter = require("./routes/users")
const tokenRouter = require("./routes/tokenizer")
//const coursesRouter = require("./routes/courses")
//const assessmentRouter = require('./routes/assessment')
//const courseWorkRouter  = require('./routes/coursework')
app.use('/workspaces',workspaceRouter)
app.use('/users',usersRouter)
app.use('/tokenizer',tokenRouter)

const userSocketMap ={};
function getAllConnectedClients(workspaceId){
    Array.from(io.sockets.adapter.workspaces.get(workspaceId) || []).map(
        (socketId)=>{
            return {
                socketId,
                username:userSocketMap(socketId)
            }
        });

}
io.on('connection',(socket)=>{
    console.log("socket connected",socket.id);
    socket.on(ACTIONS.join,({workspaceId,user})=>{
       userSocketMap[socketId] = username,
       socket.join(workspaceId);
       const clients = getAllConnectedClients(workspaceId)
       clients.forEach(({socketId})=>{
           io.to(socketId).emit(ACTIONS.JOINED,{
               clients,
               username,
               socketId:socket.id,

           });
       });
    });
    socket.on('disconnecting',()=>{
        const workspaces =[...socket.workspaces];
        workspaces.forEach((workspaceId)=>{
            socket.in(workspaceId).emit(ACTIONS.DISCONNECTED,{
                socketId:socket.id,
                username:userSocketMap[user.id],

            });
        });
        delete userSocketMap[socketId];
        socket.leave()
    })
});
const PORT = process.env.PORT ||5000;
server.listen(PORT,()=>console.log(`listening on port ${PORT}`))
