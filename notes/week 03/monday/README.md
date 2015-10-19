[Table of Contents](/README.md)

# Monday, Oct 19th

## Goals:
* [Grid Systems](/units/grid-systems)
* Functions, Constructors

## If challenge:

Complete
```js

var name = 'will';

// Complete the if statement so that the console.log statement runs
// and says "Hello will";
// You must leave the === in the expression

if(===){
  console.log('Hello ' + );
}

// Complete the if statement so that the console.log statement runs
// and says "Goodbye will";
// You must leave the bang in the conditional expression
if (!) {
  console.log('Goodbye ' + );
}

// Complete the if/else statement so that the console.log statement runs
// and says "You entered the else statement";
// You must leave the bang in the conditional expression
//
if (!=) {
  console.log('Ooops!');
} else {
  console.log('You entered the else statement');
}
```


### Notes

## Functions

A function is a group of statements that can be called multiple times, and can
be stored in a variable or passed around.

To put it another way: A function is an object that contains JavaScript code
that is run when I call the function.

Functions have:
- Zero or more arguments
- Zero or more explicit parameters
- Two implicit parameters (`this`, `arguments`)
- Zero or more side effects
- Exactly one return value, `undefined` by default

### Function Declaration
A function declaration is a complete statement that can stand on its own. It
creates a function with the name you specify.

A function declaration consists of:
1. `function` keyword
2. function name
3. parameter list
4. function body

```js
function functionName(firstParameter) {
  // body
}
```

### Function Expression
A function expression cannot stand on its own, but we can assign it to a
variable or pass it to another function.  It's not a statement, it's an
expression, so it must be used as part of a statement.

```js
var aFunction = function(thing) {
  alert(thing);
}

document.getElementById(id).addEventListener('click', function(){
  alert("Hay");
});

// Immediately Invoked Function Expression
(function(){

})();
```

## Scope
- Lexical (top to bottom)
- Variable declarations are hoisted to the top of their function, assignments
  are not
- Function declarations are hoisted in their entirety

## In-Class Code
[Code that we wrote today](/notes/week 03/monday/code)

## Homework

* [Functions Practice](https://github.com/theironyard-frontend-nashville/assignments/tree/cohort2/week03/mon)
