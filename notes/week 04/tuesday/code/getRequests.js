console.log('get requests');

//jQuery selector

var body = $('body')


//jQuery methods (like for ajax)
function processData(data) {
  //process data
}

$.getJSON('https://api.github.com/users/nicerhugs/repos').done(function(data) {
  console.log(arguments);
  //do the work with this data in here
  processData(data)
})
