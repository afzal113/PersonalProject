// Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var templates = require('./js/manage_file');
// Lets define a port we want to listen to
const PORT = 8080;

// We need a function which handles requests and send response
function handleRequest (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  try {
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
}
dispatcher.onGet('/phones', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var body = templates.read('data.txt');
  res.end(body); // readfile
});
// Create a server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
