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

  var $form = $('form');  

  $( "input" ).focus(function() {
    $("#button").addClass("make-visible");
  })

  $form.submit(function(){
    $("button").addClass("is-done");
    $("button").addClass("is-active");
    $("button").text("Subscribed");
    $("button").css("cursor","default");
    $("#button").css("opacity","1");
    console.log("submitted");
     $.post($(this).attr('action'), $(this).serialize(), function(response){
           // do something here on success
           console.log("did it");           
     },'json');
     return false;
  });

});


