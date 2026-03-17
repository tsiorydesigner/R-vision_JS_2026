const http = require('http');

// Simple HTTP server

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Bonjour 2026, Node.js!\n');
});

server.listen(port, hostname, () => {
    console.log(`Serveur en cours d'exécution à http://${hostname}:${port}/`);
});

