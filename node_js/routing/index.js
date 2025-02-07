

import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url ==="/") {
    res.end('<h1>Home</h1>');
  } else if (req.url === '/about') {
    res.end('<h2>About Section </h2>');
  } else if (req.url === '/contact') {
    res.end('<h3>Contact Form</h4> ');
  }
}) 

server.listen(8000, () => console.log)
