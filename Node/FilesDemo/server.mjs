import { createServer } from 'http';

const port = 5000;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Welcome to Node Server\n");
  res.end("Hello World.........\n");
});

server.listen(port, () => console.log(`Listening at port number ${port}`));
