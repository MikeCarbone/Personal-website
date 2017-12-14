//$(document).ready(function(){
//  $("a").on('click', function(event) {
//
//    if (this.hash !== "") {
//      event.preventDefault();
//      var hash = this.hash;
//
//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 800, function(){
//   
//        window.location.hash = hash;
//      });
//    }
//  });
//});

$(document).ready(function($){
        var parPosition = [];
        $('.mover').each(function() {
            parPosition.push($(this).offset().top);
        });
        
    $('a.navLink').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 800);
      return false;
    });
        
        $(document).on('scroll', function() {
            var position = $(document).scrollTop(),
                index;
            
            for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
            
            $('.navigation ul li a').removeClass('active');
            $('.navigation ul li a:eq('+index+')').addClass('active');
        });
        
          $('.navigation ul li a').click(function () {
      $('.navigation ul li a').removeClass('active');
        $(this).addClass('active');
    });   
  });
