// Function Declaration
function blarg(x) {
  if (x > 10) {
    return x * 10;
  } else if(x > 5) {
    return x * 5;
  }

  return x;
}


console.log(
  blarg(5.01)
);


function dance() {
  var name = 'jess';
}

dance();


// Function Expression
var sum = function(a, b){
  return a + b;
}

console.log(
  sum(2, 2)
);


// Immediately evoked function expression
(function(){

  var name = 'will';

  var foo = function() {
    console.log('did foo:', name);
  }

  foo();

}());


// Hoisting

var name;
var willDanceyDance
willDance();

function willDance() {
  console.log(name + ' does a dance');
}

name = 'will';

// willDanceyDance(); // this will crash

willDanceyDance = function() {
  console.log(name + ' did a dancey dance');
}


// Partially applied functions
function bark(msg) {

  /// stored until speak is excuted
  return function speak(a){
    console.log('speak! ' + msg + ' you said: ' + a);
  }
}

var speak = bark('hello');
speak('you are awesome!');


var obj = {
  name: 'will'
};

// obj.name or obj['name']



//
// var Person = {
//   prototype: {
//     ...
//     toString: function(){}
//   },
//   name: 'will',
//   age: 31,
//   eyeColor: 'hazel'
// }

// ### Constructors ###
// Any function can be a constructor
// Use the `new` keyword to use a function
// as a constructor.

// If the function does not define properties with
// the 'this' keyword,
// the new object will not have any instance properties.
function Person(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyeColor = eyeColor;
  this.pooped = true;
}

// Static function / Factory Function
Person.makeAWill = function() {
  return new Person('will', 31, 'hazel');
}


Person.prototype.skyDive = function() {
  console.log(this.name + ' just jumped out of a perfectly decent airplane');
}

Person.prototype.setName = function(name) {
  if (!name) {
    console.log('You did not set a name.');
    return;
  }

  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
}

var a = new Person('will', 31, 'hazel');
var b = new Person('jess', 31, 'blue');
console.log(a);
console.log(b);
a.skyDive();
b.skyDive();

var c = Person.makeAWill();
console.log(c);
console.log(a.name);
console.log(b.name);

a.name = 'Will Golden';
console.log(a.name);

a.setName('Meerkats');
console.log(a.name);

a.setName(); // should log error
console.log(a.getName());
