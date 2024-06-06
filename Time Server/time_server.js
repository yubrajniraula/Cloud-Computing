const http = require('http');

const port = 8000
function zeroFill(i) {
return (i < 10 ? '0' : '') + i
}
function now () {
    var d = new Date()
    let output = {'year': d.getFullYear(),
    'month': zeroFill(d.getMonth() + 1),
    'date': zeroFill(d.getDate()),
    'hour': zeroFill(d.getHours()),
    'minute': zeroFill(d.getMinutes())}

    return output;
}
let server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(now()+'\n');
});
// Listening on the port provided on the command line
server.listen(Number(port))
console.log('Node server running on http://localhost:'+ port);