### challenge:

var x = 1;
var y = 'abc';
var z = true;
var a = x;
x = 5;

console.log(x);
console.log(y);
console.log(z);
console.log(a);


### Inheritance Example

```js
// the Magical Creature Constructor
function MagicalCreature(options) {
  this.name = options.name || 'unnamed';
  this.magicType = options.magicType || 'basic';
}

// the Magical Creature protoype has a 'useMagic' function, available to all magical creatures
MagicalCreature.prototype.useMagic = function() {
  console.log(this.name + ' just used ' + this.magicType + ' magic!')
}

// the Unicorn Constructor should be a subset of the MagicalCreature constructor
function Unicorn(opts) {
    MagicalCreature.call(this, opts);
    this.hornColor = opts.hornColor || 'iridescent';
}

// the Unicorn prototype should inherit from the Magical Creature prototype
Unicorn.prototype = Object.create(MagicalCreature.prototype);
```

### Everything in Javascript has a prototype!

1. all things in javascript are objects because the data is not JUST the data. (see 2)
2. all things in javascript can have named properties that we can access with the dot (.) notation
  eg. `'hello'.length`
3. each javascript datum is an instance of a constructor.
4. All constructors are functions. Instances of a constructor inherit properties from their constructors through what's called "prototypical inheritance".
5. existing prototypes in JS: boolean, number, string, object, array, function
6. learn about each prototype by searching MDN:
  * [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
  * [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype)
  * [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
  * [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype)
  * [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)
  * [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

practice examples use existing methods on types' prototypes:
```js
// 'hello' into this: [h, e, l, l, o]
var greeting = 'hello';
var greetingArray = greeting.split('');

// num into a string:
var num = 82694
var numString = num.toString();

// find the index of 'Marcy' in an array of unicorn names
var unicornNames = [
  'Sprinkles',
  'Dot',
  'Amalthea',
  'Marcy',
  'Bull dog Jones',
  'Sprinkles II'
]
var marcyIndex = unicornNames.indexOf('Marcy');
```


### COOL ARRAY METHODS! (Filter, Map, Reduce, ForEach)

#### Sandwiches (pseudo code)

* Filter - take all the ingredients in my house, and return only those needed for a sandwich
  * filter has return value
  * return value is a truth test
  * new array is shorter than or exactly the same as original array

```js
var ingredients = food.filter(function(foodItem, i, array) {
  return isUsedInSandwich(foodItem)
});
```


* Map - take all sandwich ingredients, and return sliced version of them
  * has a return value
  * return value is the item to be put in the new array
  * new array is same length as original array

```js
var preppedIngredients = ingredients.map(function(foodItem, i, array) {
  return slice(foodItem);
});
```


* Reduce - combine all sandwich ingredients into sandwich.
  * has a return value
  * return value is a single thing (string, number, object, array)

```js
var sandwich = preppedIngredients.reduce(function(sandwhichSoFar, currentIngredient, i, array) {
  return sandwhichSoFar + currentIngredient;
});
```

* ForEach - take all food and put them away
  * has no return value
  * used for doing stuff once per item in an array
  * only has "side effects"

```js
food.forEach(function(foodItem, i, array) {
  putAway(foodItem);
});
```

### Code from today
[code we wrote in class](https://github.com/theironyard-frontend-nashville/notes/tree/cohort2/notes/week%2003/tue/code)

### Homework
[homework](https://github.com/theironyard-frontend-nashville/assignments/tree/cohort2/week03/tue)
