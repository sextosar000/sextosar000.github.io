$(document).ready(function(){


    $('#logo').click(function(){
      $('.social').fadeToggle(100);
    })

    $('#projlink').click(function(){
      $('#a').fadeToggle(200);
      $('#b').fadeToggle(300);
      $('#c').fadeToggle(400);
    })


    $(".open").on("click", function(){
      $(".popup, .popup-content").addClass("active");
      });

      $(".close, .popup").on("click", function(){
        $(".popup, .popup-content").removeClass("active");
        }); 
  });