const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 8080;

// Serve the React frontend
app.use(express.static('client/build'));

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);

const wss = new WebSocket.Server({ server });

let currentText = ''; // Store the current text on the server

// Broadcast the text to all connected clients
const broadcastText = () => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'text', data: currentText }));
    }
  });
};

// WebSocket connection
wss.on('connection', (ws) => {
  console.log('New client connected');

  // Send the current text to the newly connected client
  ws.send(JSON.stringify({ type: 'text', data: currentText }));

  // Handle incoming messages from clients
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === 'text') {
      currentText = parsedMessage.data;
      broadcastText(); // Broadcast the updated text to all clients
    }
  });
});

wss.on('error', (error) => {
    console.error('WebSocket server error:', error.message);
  });
