var digits = Array.from(document.getElementsByClassName('digit'));
var operators = Array.from(document.getElementsByClassName('operator'));
var answer = document.querySelector('.answer');

var x;
var y;
var operator;
var answer;

digits.forEach(function(element){
  element.addEventListener('click', function(event){
    var value = event.target.value;

    if (!x && !operator) {
      x = value;
    } else if(x && !operator) {
      x += value;
    } else if (!y && operator) {
      y = value;
    } else if(y && operator) {
      y += value;
    }

    answer.value += value;
  });
});

operators.forEach(function(element){
  element.addEventListener('click', function(event){
    var value = event.target.value;

    if (value !== '=') {
      operator = value;
      answer.value += value;
    } else {
      x = eval(x + operator + y);
      y = undefined;
      operator = undefined;
      answer.value = x;
    }
  });
});
