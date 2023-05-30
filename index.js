//const http = require('http');
const ipModule = require('./model/getDns');
const express = require('express');
// 1. beolvassa a fajlt
// 2. return module.exports

const app = express();

// arguments
//const domain = process.argv[2];

// req --> Incoming HTTP Request
// res ---> Outgoing HTTP Response
/*const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const domain = url.searchParams.get('domain');

  ipModule.getIpOf(domain, (result) => {
    res.write(`<h1>${domain} ip address is: ${result}</h1>`);
    res.end();
  });
})*/

app.use(express.static('./public'));

// req ---> Smart HTTP Request
// res ---> Smart Http Response
app.get('/ipof', (req, res) => {
  const domain = req.query.domain;
  ipModule.getIpOf(domain, (result) => {
    //res.send(`<h1>${domain} ip address is: ${result}</h1>`);
    res.json({ ip: result });
  })  
});

/*ipModule.getIpOf(domain, (result) => {
  console.table(result);
})*/

app.listen(8080);
//server.listen(8080);
