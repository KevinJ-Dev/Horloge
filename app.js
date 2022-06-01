const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.json({'Hour':(new Date()).getHours(), 'minutes':(new Date()).getMinutes(), 'secondes':(new Date()).getSeconds()});
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});