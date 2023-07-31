# Real-time Text Editor

This is a simple web application that allows multiple users to collaborate and edit a text in real-time using WebSockets. Each connected user can see changes made by others instantly, making it ideal for collaborative editing or live text sharing.

## Features

- Real-time collaboration: Multiple users can simultaneously edit the same text, and changes are instantly propagated to all connected clients.

## Dependencies

This web app is built using the following technologies and dependencies:

### Backend (Node.js):

- [Express](https://www.npmjs.com/package/express): A minimal web application framework for Node.js that serves the frontend and handles WebSocket connections.
- [ws](https://www.npmjs.com/package/ws): A simple WebSocket implementation for Node.js to enable real-time communication between clients.

### Frontend (React.js):

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [create-react-app](https://create-react-app.dev/): A tool to create a new React app with no build configuration.
- [ws](https://www.npmjs.com/package/ws): WebSocket client for the frontend to communicate with the WebSocket server.
