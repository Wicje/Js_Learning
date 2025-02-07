//*************WHAT ARE MODULES ***********************//
// Modules are a way to pass our code from one file to another 
// That means, it allows  us to reuse our code again and again 
// without having to write it again.



// THis will allow us to use that function from 
// that (index.js) file, and we can use it right here

//EXAMPLE
const greet = require('./greet');
greet('Josephan');


// People.js
const {person_1, person_2, person_3} = require('./peoples');
console.log(person_1);        

////
greet(person_1);