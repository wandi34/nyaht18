// content of index.js
const http = require('http')
// const port = 8080
const Web3 = require('web3');
let web3;

var cors = require('cors')
var app = require('express')

const SerialPort = require("serialport")
const serialport = new SerialPort('/dev/cu.usbmodem144401', {
  baudRate: 9600
});

const Readline = SerialPort.parsers.Readline;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const HelloContract = new web3.eth.Contract([
  {
    "constant": true,
    "inputs": [],
    "name": "hi",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
], '0x5c1a091f00ccaf8d3dfe54adce98098fee97820f');

const parser = new Readline({delimiter: '\n'});
serialport.pipe(parser);

console.log('parser setup');

var rain = false;

parser.on('data', function(data) {
  console.log('data received: ', data);
  if(data) {
    rain = false;
  } else {
    rain = true;
  }
});



web3.eth.getAccounts().then((response) => {
  web3.eth.defaultAccount = response[0];
  console.log("awi default account: ", web3.eth.defaultAccount);

  HelloContract.methods.hi().send({from: '0x0E4359C2D5957A4600e85586a2f91c69257B388A'}).then((response) => {
    console.log("awi response: ", response );
  }).catch((error) => console.log("awi error: ", error.message));
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(rain));
  console.log(rain);
}).listen(3001);


