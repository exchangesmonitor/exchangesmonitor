$( ".toggle-color" ).click(function() {
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

      if ($("#open-modal-email").hasClass("opened")) {
        setTimeout(function(){ 
          $(".removeModal").detach().appendTo($(".newsletter-card"));
          $("#open-modal-email").removeClass("opened");
          localStorage.setItem("newsletter3", (new Date()).getTime());
        }, 800);        
      }
    }        
  });

});

$(document).ready(function(){  
  $( "input" ).focus(function() {
    $("label").addClass("moveLabel");
    $(".button").addClass("showButton")
    $(".button").addClass("buttonPointer")
    $("#mce-EMAIL").addClass("focusBg");
    // $( "label" ).animate({      
    // }, 1000, function() {
    // });
  });
  $( "input" ).blur(function() {
    if ($("#mce-EMAIL").val() != "" ) {
    } else {
      setTimeout(function(){
        $("label").removeClass("moveLabel"); 
        $(".button").removeClass("showButton");
        $(".button").addClass("buttonPointer");
        $("#mce-EMAIL").removeClass("focusBg");
      }, 300);  
    }
  });
});