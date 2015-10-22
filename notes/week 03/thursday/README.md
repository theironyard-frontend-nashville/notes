[Table of Contents](/README.md)

# Thursday, Oct 22st

## Challenge:

Using the list of friends below, write code that returns the following values:

1. An array of each friend's name, reversed. For example: 'will' -> 'lliw'
2. A float of the average age of the friends (Bonus Points)
3. An array of friend's that are older than 25 (Bonus Points)
4. An array of friends that all enjoy gardening as a hobby (Bonus Points)
5. An array of friends that do not have football as a hobby (Bonus Points)


```js
  var friends = [
    {name: 'will', age: 31, hobbies: ['painting, drawing', 'woodworking', 'gardening']},
    {name: 'mike', age: 31, hobbies: ['painting', 'drawing', 'photography', 'programming']},
    {name: 'chris', age: 30, hobbies: ['fishing', 'motocross', 'football']},
    {name: 'dylan', age: 21, hobbies: ['football', 'baseball']},
    {name: 'paige', age: 26, hobbies: ['dancing', 'gardening']}
  ];
  // #1 - An array of each friend's name, reversed. For example: 'will' -> 'lliw'
  var revereName = function(total, friend){

  };
  var answer1 = friends.map(revereName);

  // #2 - A float of the average age of the friends
  var averageAge = function(total, friend){

  };
  var answer2 = friends.reduce(averageAge) / friends.length;

  // #3 - An array of friend's that are older than 25
  var olderThan25 = function(friend){

  };
  var answer3 = friends.filter(olderThan25);


  // #4 - An array of friends that all enjoy gardening as a hobby
  var lovesGardening = function(friend){

  };
  var answer4 = friends.filter(lovesGardening);

  // #5 - An array of friends that do not have football as a hobby
  var dislikesFootball = function(friend){

  };
  var answer5 = friends.filter(dislikesFootball);
```



## Notes:
* Review Homework

## Goals:
* Learn about modifying the DOM
	* innerHTML
	* changing styles
  * querySelector, getElementById
* Interacting with the DOM
* Getting values from form elements
* Event listeners
* Event bubbling

## In-Class Code
[Code that we wrote today](/notes/week 03/thursday/code)

## Homework
* [Calculator](https://github.com/theironyard-frontend-nashville/assignments/tree/cohort2/week03/thur)
