

  import express from 'express';
import student from './route/student.js'
const app = express();


//app.get('/', (req, res) => {
  //res.send('<h1>Welcome to Express.js</h1>');
//});
//
//
//
//
//
//Route params
app.get('/student/delete/:id', (req, res) => {
  //res.send('User deleted.');
  res,send(req.params.id);
});


app.use('/students', student);



app.listen(8000, () => console.log('Server Up!'));
