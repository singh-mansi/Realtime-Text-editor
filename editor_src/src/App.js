import React, { useEffect, useState } from 'react';
import './App.css';

const WebSocketClient = new WebSocket('ws://localhost:8080');

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    // Handle incoming messages from the WebSocket server
    WebSocketClient.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'text') {
        setText(data.data);
      }
    };
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Send the new text to the WebSocket server
    WebSocketClient.send(JSON.stringify({ type: 'text', data: newText }));
  };

  return (
    <div className="App">
      <h1>Real-time Text Editor</h1>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
}

export default App;
