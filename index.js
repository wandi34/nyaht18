// content of index.js
const http = require('http')
const port = 8080

const SerialPort = require("serialport")
var serialport = new SerialPort('/dev/tty.usbmodem1421', {
  baudRate: 9600
});

// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

// it opens the connection and register an event 'data'
serialport.on("open", function () {
  console.log('Communication is on!');

  // when your app receives data, this event is fired
  // so you can capture the data and do what you need

  serialport.on('data', function(data) {
    console.log('data received: ' + data);
  });
});