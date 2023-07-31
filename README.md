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
- [ws](https://www.npmjs.com/package/ws): WebSocket client for the frontend to communicate with the WebSocket server.

## Get started

1. Clone this repository
2. Install Backend (Nodejs, Expressjs, ws) dependencies
```bash
  npm init -y
  npm install express ws
```
4. Install Frontend (React) dependencies
5. Run nodejs server

```bash
node server.js
```
6. Run the React application
```bash
npm start
```
8. Open the React application in two different browser tabs to experience real-time editing.

## Architecture
This realtime collaborative editor contains a text editor which supports edits from more than one user at the same time. I have used Nodejs, Reactjs and Websockets to complete this challenge. 

1. Backend with Node.js and WebSockets: We chose Node.js as the backend for its event-driven, non-blocking I/O model, making it well-suited for handling concurrent WebSocket connections. WebSockets are the best choice for real-time communication between clients and the server, as they allow bidirectional communication and low-latency updates.
2. Frontend with React.js: React.js is a popular and efficient JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it easy to manage and update UI elements efficiently, which is crucial for a real-time collaborative app.
3. Express.js as the Server Framework: We used Express.js to serve the React frontend and handle WebSocket connections. Express is lightweight and easy to set up, making it ideal for this simple application.

## Tradeoffs
1. One of the tradeoffs of this implementation is that the data is so persistent on the server. This can be resolved using a database to store and retrieve data.
2. This implementation may not be suitable to handle a large number of concurrent users, for a real-time app we would need to consider more robust Websocket library.
3. The current implementation lacks proper error handling, such as network disconnections or WebSocket failures. For a real product its crucial to handle errors and provide feedback to users.

## Potential Improvements 
If I had more time and I was developing a real product, here are some potential improvements I could make.
1. Implement User Authentication for a more secure and personalized experience.
2. Add indicators to show which part of the text is being edited by which collaborator.
3. Add Rich text support like formatting, images, etc to make the editor more versatile and useful.
4. Perform comprehensive unit testing to ensure the app's functionality remains robust as it evolves.
5. Add a text chat feature so collaborators can communicate in real-time through the application.
6. Implement document versioning to help collaborators track changes overtime and revert back to different versions of the document if required.
7. Create a more user friendly and accessible UI.


