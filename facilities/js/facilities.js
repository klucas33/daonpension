
$(function(){

  setTimeout(function(){

    $(".main_img").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      
      fade:true
      // speed:1000

      // centerMode: true,
      // vertical: true
    });
  },500)

  
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