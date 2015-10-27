var arr = [
  {name: 'jess', gender: 'f'},
  {name: 'greg', gender: 'm'},
  {name: 'kate', gender: 'f'},
  {name: 'nick', gender: 'm'},
  {name: 'joe', gender: 'm'}
]

var ladiesOnly = arr.filter(function(current, index, array) {
  return current.gender === 'f';
  //is it a girl?
})
