import { ConnectedSocket, MessageBody, SocketController, OnMessage, SocketIO, } from "socket-controllers";
import { Socket, Server } from "socket.io";

@SocketController()
export class RoomController {
    public async joinGame(@SocketIO() io: Server, @ConnectedSocket() socket: Socket, @MessageBody() message:any){
        console.log('New user joining in ', message)

        const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
        const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id);
        
        if(socketRooms.length > 0 || connectedSockets && connectedSockets.size === 2){
            socket.emit("room_join_error",{
                error: "Room is full, so please choose another one"
            });
        } else {
            await socket.join(message.roomId);
            socket.emit('room_joined');
        }
    }
}