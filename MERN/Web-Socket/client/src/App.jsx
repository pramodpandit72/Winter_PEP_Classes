import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessage((prev) => [...prev, data]);
    });

    socket.on("useCount", (count) => {
      setUserCount(count);
    });

    return () => {
      socket.off("message");
      socket.off("useCount");
    };
  }, []);

  const joinedChat = () => {
    socket.emit("join", name);
    setJoined(true);
  };

  const sendMessage = () => {
    if (text.trim() === "") return;
    socket.emit("sendMessage", text);
    setText("");
  };

  if (!joined) {
    return (
      <div style={{ padding: "100px" }}>
        <h2>Enter your name</h2>
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={joinedChat}>Join</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "100px" }}>
      <h2>Live Chat</h2>
      <p>Online Users: {userCount}</p>

      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflow: "auto",
          padding: "10px",
        }}
      >
        {message.map((msg, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            <strong>{msg.user}</strong> ({msg.time}) : {msg.text}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;