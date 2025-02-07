

//**************CLOSURE*************************************

//Closures are very important in JS and it is a combination of a 
//function bundled together with reference to it's surrounding
//in other word's, a closure gives access to an outer function scope
//from an inner function.


function outer(){
  function inner(){

  }
}

//EXAMPLES

function human() {
  const name = 'sina';
  function sayHi(){
    console.log('Hi , i am ${name}');
  }

  function sayHowyouFeel(){
    console.log('${name} is feeling good');
  }

}


//Closures remember the outer ffunction scope even after creationb//time  
//
//*******************************************************************
document.getElemntById('size-12').onclick = function(){
  document.body.style.fontSize ='12px';
}
document.getElemntById('size-14').onclick = function(){
  document.body.style.fontSize ='14px';
}
document.getElemntById('size-16').onclick = function(){
  document.body.style.fontSize ='16px';
}
//But above is not efficient
//*****************ANOTHER WAY***********************
function clickHandler(size){
  return function() {
  document.body.style.fontSize = '${size}px';
  }
}

document.getElementById('size-12').onclick = clickHandler(12);

document.getElementById('size-12').onclick = clickHandler(14);

document.getElementById('size-12').onclick = clickHandler(16);










//****************************************************

