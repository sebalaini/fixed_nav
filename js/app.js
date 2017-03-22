$(document).ready(function(){

/***************
MENU BTN
***************/

$("#menu").click(function() {
  $( ".nav" ).fadeToggle("slow", "linear");
});

//HAMBURGER INTERACTIVITY
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

//HIDDEN NAV ON CLICK
if ($(window).width() < 768) { 
  $(".link").click(function(){
  $(".nav").fadeToggle("slow", "linear");;
  $("#menu").removeClass('is-active');
});
};



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


