$(document).ready(function(){

/***************
MENU BTN
***************/

$("#menu").click(function() {
  $( ".nav" ).fadeToggle("slow", "linear");
  $("#menu").addClass("hidden");
  $("#close").removeClass("hidden");
});

$("#close").click(function() {
  $( ".nav" ).fadeToggle("slow", "linear");
  $("#menu").removeClass("hidden");
  $("#close").addClass("hidden"); 
});



/***************
FIX TOGGLE ERROR ON RESIZE
***************/

$(window).resize(function() {
  if ($(window).width() < 768) {
   $('.nav').css("display", "none"); 
  }
  else {
   $('.nav').css("display", "inline-block"); 
  }
});

}); // end ready


