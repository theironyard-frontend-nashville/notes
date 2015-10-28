var url = 'http://tiny-starburst.herokuapp.com/collections/chat';
var nameInput = $('.nameInput');
var textInput = $('.textInput');
var sendButton = $('.sendButton');
var log = $('.log');

var validate = function(data){
  var name = data.name;
  var message = data.message;

  if (!name) {
    alert('Where is your name?!');
    return false;
  }

  if (!message) {
    alert('Where is your message?!');
    return false;
  }

  return true;
};

var send = function(event){
  var name = nameInput.val();
  var message = textInput.val();

  var data = {
    name: name,
    message: message,
    created: Date.now()
  };

  if (validate(data)) {
    var postSuccess = function(data){
      console.log(data);
      textInput.val('');
    }

    $.post(url, data, postSuccess);
  }
};

var handleEnter = function(event){
  if (event.keyCode === 13) {
    send();
  }
};

var displayEntries = function(entries){
  log.html('');

  entries.forEach(function(entry){
    var article = $('<article class="entry"></article>');
    var header = $('<header>'+ entry.name +'</header>');
    var content = $('<p>'+ entry.message +'</p>');
    var time = $('<time>'+ entry.created +'</time>');

    article.append(header);
    article.append(content);
    article.append(time);

    log.prepend(article);

  });
}

var getEntries = function(){
  var handleSuccess = function(data){
    displayEntries(data);
  }
  $.get(url, null, handleSuccess);
};


sendButton.click(send);
textInput.keypress(handleEnter);

// Get the entries from the server

setInterval(function(){
  getEntries();
}, 1000);
