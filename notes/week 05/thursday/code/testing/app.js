// THis function takes two numbers and
// returns the sum
function sum(x, y){
  if (!x || !y) {
    throw new Error('You did not specify enough paramters.');
  }
  return x + y;
};

function sayHello(name){
  return 'Hello to you, '+ name +', you good person!';
};

// Expose these functions and variables
// publicly to the rest of the app
// inside of Node.js
module.exports = {
  sum: sum,
  sayHello: sayHello
};
