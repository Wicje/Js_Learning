


import express from 'express';
const app = express();

// UGLYcode
app.get ('/student', (req, res) => {
  res.send ('All Students');
});

app.post('/Student', (req, res) => {
  res.send('Add new Student');
});

app.put('/student', (req, res) => {
  res.send('Update Students');
});

app.delete('/student', (req, res) => {
  res,send('Delete Student');
});



//REfactor
//
app
.route('/student')
.get((req, res) => res.send('All Students'))
.post((req, res) => res.send('Add new Student'))
.put((req, res) => res.send('Update Student'))
.delete((req, res) => res.send('Delete Student'));

app.listen(8000, ()=> console.log('Server Up!'));

