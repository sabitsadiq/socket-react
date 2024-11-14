import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";
const socket = io.connect("http://localhost:3001");
function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("Receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Room Number ..."
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>

      <input
        placeholder="Message ..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
