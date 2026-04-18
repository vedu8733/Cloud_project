const http = require('http');

const server = http.createServer((req, res) => {

//   res.end("Hello from AWS DevOps Project ");
res.end("hello world 1234");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});