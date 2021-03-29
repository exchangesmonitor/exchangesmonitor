// var email = document.getElementById('MERGE0'),
//     button = document.getElementById('button');

// function validateEmail(email) {
//     var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     return ex.test(email);
// }

// email.addEventListener('keydown', function() {
//   var email = this.value;
  
//   if(validateEmail(email)) {
//     button.classList.add('is-active');
//   }
// });

// button.addEventListener('click', function(e){
//   e.preventDefault();
//   this.classList.add('is-done','is-active');
  
//   setTimeout(function(){ 
//     button.innerHTML = "Subscribed"
//   }, 500);
// });

$( ".toggle-color" ).click(function() {
  console.log("mode switch");
  $('body').toggleClass("lightmode");
});

$(document).ready(function(){  
  

  $("#mc-embedded-subscribe-form").submit(function (event){
    event.preventDefault();
    function isValidEmailAddress(emailAddress) {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(emailAddress);
    }

    if (isValidEmailAddress($("#mce-EMAIL").val())){
      $(".button").addClass("showButton");
      $(".clear").addClass("w-100");
      $(".button").addClass("submittedButton");
      $(".button").attr("value","Submitted");
    }        
  });

});

$(document).ready(function(){  
  $( "input" ).focus(function() {
    $("label").addClass("moveLabel");
    $(".button").addClass("showButton")
    // $( "label" ).animate({      
    // }, 1000, function() {
    // });
  });
  $( "input" ).blur(function() {
    $("label").removeClass("moveLabel");
    $(".button").removeClass("showButton")
  });
});