// // document.body.children[0].children[0].innerHTML = "Yo yo mon...im dumb"
//
// document.getElementsByTagName('h1')[0].innerHTML = 'yo dawg, i heard you like elements, so i put an element in your element';
//
// setTimeout(function(){
//   document.getElementById('mainh1').innerHTML = 'foo';
// }, 2000);
//
// document.querySelector('h1.purple').style.color = 'pink';
// document.querySelector('main h1').style.background = 'purple';
// var purples = document.querySelectorAll('.purple');
//
//
// var friends = [
//    {name: 'will', age: 31, hobbies: ['painting, drawing', 'woodworking', 'gardening']},
//    {name: 'mike', age: 31, hobbies: ['painting', 'drawing', 'photography', 'programming']},
//    {name: 'chris', age: 30, hobbies: ['fishing', 'motocross', 'football']},
//    {name: 'dylan', age: 21, hobbies: ['football', 'baseball']},
//    {name: 'paige', age: 26, hobbies: ['dancing', 'gardening']}
//  ];
//
//
// function reverseName(friend) {
//   return friend.name.split('').reverse().join('');
// }
//
// var mainTag = document.querySelector('main');
// var names = friends.map(reverseName).forEach(function(name) {
//   var element = document.createElement('h1');
//   element.innerText = name;
//   element.style.color = 'green';
//   mainTag.appendChild(element);
// });
//
// //
// // [].forEach.call(purples, function(purple){
// //   purple.innerHTML = 'updated again!!!!';
// // });
//
//
// var doStuffBtn = document.getElementById('doStuff');
// var handleClick = function(){
//   console.log('you clicked the button!');
// }
// var handleClickToo = function(){
//   console.log('you clicked the button, too!');
// }
//
// var handleMouseOver = function(){
//   console.log('you hovered the button!');
// }
// var handleMouseOut = function(){
//   console.log('you moved off the button!');
// }
// doStuffBtn.addEventListener('click', handleClick);
// doStuffBtn.addEventListener('click', handleClickToo);
// doStuffBtn.addEventListener('mouseover', handleMouseOver);
// doStuffBtn.addEventListener('mouseout', handleMouseOut);

// var name = document.getElementById('name');
// debugger;
//
function flash(element, from, to){
  element.style.background = to;

  setTimeout(function() {
    element.style.background = from;
  }, 300)
}
document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

   var name = document.getElementById('name');
   var handleKeyPress = function(event) {
     if (event.keyCode === 13) {
       if (event.target.value != 'please') {
         flash(event.target, 'white', 'red');
         alert('ah ah ah, you didnt say the magic word!');
       } else {
         flash(event.target, 'white', 'green');
         alert('ACCESS GRANTED');
       }

     }
   };

   name.addEventListener('keypress', handleKeyPress);
 });
