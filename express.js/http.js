



import express from 'express';
const app = express();

//HTTP Methodes
//GET => Helps to retrieve data
//Post => Helps to create/insert data
//Put => completely Update data
//Patch => Partially Delete
//Delete => Delete data
//All => Any HTTP request Methodes



// String Pattern Patch
app.get('/ab?cd', (req, res) => {
  res.send ('If the user hit (acd) od (abcd) then this will run');
});


//REGEX = Regular expression
//

app.get(/x/, (req, res) => {
  res.send('if the path includes the letter (x) will work');
});



  app.listen(8000, () => console.log('Server Up'));
