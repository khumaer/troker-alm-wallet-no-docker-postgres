// Previously known as index.js

// Import required modules
const express = require('express');
const next = require('next');
const app = next({
  dev: process.env.NODE_ENV !== 'production',
});

// Initialize the Next.js application
app.prepare().then(() => {
  const server = express();

  // Middlewares and API routes here...

  server.use(app.getRequestHandler());

  // Production server configuration
  if (process.env.NODE_ENV === 'production') {
    server.enable('trust proxy');
  }

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready for production!');
  });
});
