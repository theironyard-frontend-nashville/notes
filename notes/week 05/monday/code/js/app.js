var hobbiesList = $('.hobbiesList');
var url = 'https://tiny-starburst.herokuapp.com/collections/egdelwonk2';

function displayHobby(data){
  var hobbyItem = $('#hobbyItem');
  var hobbyTemplate = hobbyItem.html();
  var compiledHobbyTemplate = _.template(hobbyTemplate);

  if (!data.created) {
    data.created = Date.now();
  }

  if (!data.updated) {
    data.updated = Date.now();
  }

  data.likes = data.likes.map(function(hobby){
    return hobby.toUpperCase();
  });

  hobbiesList.append(compiledHobbyTemplate(data));
}

function getHobbies(){
  $.ajax(url).done(function(data){
    data.forEach(displayHobby);
  });
}

getHobbies();

// displayHobby({
//   likes: ['gouda', 'american', 'swiss'],
//   title: 'Cheese',
//   description: 'We love nachos!',
//   freddysPicOfTheDay: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/12194760_10156207625530387_5240372763147697377_o.jpg'
// });
//
// displayHobby({
//   likes: ['bentons', 'canadian', 'black peppered'],
//   title: 'Bacon',
//   description: 'its the best!',
//   freddysPicOfTheDay: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12193595_10156210135135387_4898374097454532557_n.jpg?oh=c64b07ffce11577f6f933dd1b7b01670&oe=56CFE5D2'
// });
