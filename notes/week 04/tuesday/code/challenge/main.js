$(".tab").click(function(tabClick){
  if ($(this).index() === 0) {
    $("#redSection").slideToggle();
  } else if ($(this).index() === 1){
    $("#blueSection").slideToggle();

  }
});
