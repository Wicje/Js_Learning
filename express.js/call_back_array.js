

import express from 'express';
cont app= express();:

const cb1 = (req, res, next) => {
  console.log('First Callback');
  next();
};
const cb2 = (req, res, next) => {
  console.log('Second Callback');
  next();
};
const cb3 = (req, res) => {
  console.log('Third Callback');
  res.send('Array of Callbacks');
};

app.get('/array-cb', [cb1, cb2, cb3]);

app.listen(8000, () => console.log('ServerUp'));
