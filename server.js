'use strict';

const express = require('express');

var os = require('os');
var HOST = '0.0.0.0';
var PORT =8080;

// App
const app = express();
app.get('/service/:serviceid', (req, res) => {
  let hostname = os.hostname();
  let data ={
      "name" : "Node JS API + Nando",
      "hostname" : hostname,
      "port" : PORT,
      "servicename":req.params.serviceid
  }
  res.send(data);

});

app.listen(PORT, HOST);
console.log(`Running on host :` + HOST);
console.log(`Running on port :` + PORT);