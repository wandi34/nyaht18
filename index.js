// content of index.js
const http = require('http')
const port = 8080
const Web3 = require('web3');
let web3;

const SerialPort = require("serialport")
var serialport = new SerialPort('/dev/tty.usbmodem1421', {
  baudRate: 9600
});

const Readline = SerialPort.parsers.Readline;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];


console.log("default account: ", web3.eth.defaultAccount);

const parser = new Readline({delimiter: '\n'});
serialport.pipe(parser);

console.log('parser setup');

parser.on('data', function(data) {
  console.log('data received: ', data);
});