// Tim's
//
function add(){
  return this.value + 1;
}

var temp = {value: 3};

function num(digit) {
  this.value = digit;
}


console.log(
  add.call(new num(1))
);


Array.from = function(obj){
  return [].slice.call(obj);
}


var obj = {0: 'a', 1: 'b', length: 2};
console.log(obj.length);
console.assert(Array.from(obj).length === 2)
console.assert(Array.from(document.querySelectorAll('body')).length === 1)
