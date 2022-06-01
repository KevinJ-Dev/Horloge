const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(cors());

app.get('/', (req, res) => {
  let hour = new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes() + ':' + new Date(Date.now()).getSeconds();
  res.json({hour: hour});
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});