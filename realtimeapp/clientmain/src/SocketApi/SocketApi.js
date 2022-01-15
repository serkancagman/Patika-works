import io from "socket.io-client"

let socket;


export const int = () =>{
    console.log("sunucuya bağlanılıyor")

    socket = io("http://localhost:3001",{
        transports: ["websocket"]
    })
    socket.on("connect",
    () => console.log("Sunucuya bağlant gerçekleşti."))
}

export const send = (color) =>{
    socket.emit("newColor",color)
}


export const subscribe = (cb) =>{
    socket.on("receive",(color)=>{
        console.log(color)
        cb(color);
    })
}