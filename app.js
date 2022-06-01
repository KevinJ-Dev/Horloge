const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Coucou');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});