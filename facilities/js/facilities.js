
$(function(){

    $("main_img").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
  
        fade:true
        // speed:1000
  
        // centerMode: true,
        // vertical: true
      });
  
      $('.but').on({
        'beforeChange': function (event, slick, currentSlide, nextSlide) {
          console.log('before');
        },
        'afterChange': function (slick, currentSlide) {
          console.log('after');
        }
  
      });
  
      //end


});