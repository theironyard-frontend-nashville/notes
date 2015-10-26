[Table of Contents](/README.md)

# Monday, Oct 26th


## Challenge:
```js

// Implement `Array.from()`, which takes an "array-like" object 
// (such as an ElementList from `querySelectorAll` or an `arguments` object),
// and converts it to a real array. 

Array.from = function(obj){
    // ...
}

console.assert(Array.from({0: 'a', 1: 'b', length: 2}).length === 2)
console.assert(Array.from(document.querySelectorAll('body')).length === 1)

```

## Notes:
* Review QotD

## Goals:
* jQuery
	* Acting / play example
	* Selecting elements
	* Adding event listeners
	* Changing HTML
	* Changing CSS
	* Others
		* Animate
		* Toggle
		* Slide
* Data attributes


## In-Class Code
[Code that we wrote today](/notes/week 04/monday/code)

## Homework
* [Calculator Redux](https://github.com/theironyard-frontend-nashville/assignments/tree/cohort2/week03/thur)
  * Rebuild your Calculator Homework from last week with jQuery

<!--
* [jQuery Like Button](https://github.com/TIY-Austin-Front-End-Engineering/jquery-like)
* [jQuery Loading Button](https://github.com/TIY-Austin-Front-End-Engineering/jquery-loading-button)
* [jQuery Tabs](https://github.com/TIY-Austin-Front-End-Engineering/jquery-tabs)
-->
