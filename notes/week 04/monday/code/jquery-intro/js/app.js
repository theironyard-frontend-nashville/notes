$('.box').each(function(index){
  $(this).html('Box ' + (index + 1));
});


// $('.box').click(function(event){
//   alert('you clicked a box');
// });

//
// var boxes = Array.from(document.getElementsByClassName('box'));
// boxes.forEach(function(box){
//   box.addEventListener('click', function(){
//     alert('you clicked a box');
//   })
// });
//
//

// $('.box').on('click', function(event){
//   alert('you clicked a box');
// });

// Event Delegation
// $('.boxes').on('click', '.box', function(event){
  // alert('ok you clicked a box');
  // $(this).slideUp();
// });



setTimeout(function(){
  $('.boxes').prepend('<div class="box">New Box!</div>');

  $('<div class="box">New new Box!</div>').appendTo('.boxes');
}, 2000);


// $('.box').html('farts').css({
//   padding: '15px',
//   color: 'red'
// }).animate({
//   padding: '30px',
//   fontSize: '24px'
// }, 1000, 'swing', function(){
//     console.log('we ran');
// });


// $('.box').slideDown(2000, function(){
//   console.log(
//     'we are done sliding down...yo'
//   );
// });


// $('.box').slideToggle();

// setTimeout(function(){
//   $('.box').slideToggle();
// }, 2000)


$('.toggle').on('click', function(event){
  $('.box').slideToggle()
});


$('.box').on('click', function(){
  var self = $(this);
  self.toggleClass('important');

  var data = self.data();
  console.log(data);

  var name = self.data('name');
  console.log(name);
});
