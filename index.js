// content of index.js
const http = require('http')
const port = 8080

const SerialPort = require("serialport")
var serialport = new SerialPort('/dev/tty.usbmodem1421', {
  baudRate: 9600
});

const Readline = SerialPort.parsers.Readline;

const parser = new Readline({delimiter: '\n'});
serialport.pipe(parser);

console.log('parser setup');

parser.on('data', function(data) {
  console.log('data received: ', data);
});