const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const initializeSocket = require('./app/socket/socketHandler');
initializeSocket(server);

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
