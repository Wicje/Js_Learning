

import express from 'express';
const app = express();

// Basic Routing
app.get('/', (req, res) => {
  res.send('Home');
});


app.listen(8000, () => console.log('Server Up!'));
