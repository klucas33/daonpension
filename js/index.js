
$(function(){

    $.ajax({
        url:'data.json',
        success:function(data){
            var type,imgSrc,title,tagList='',asrc;

            function dataFun(ty){
                tagList = '';
                data.gallery.forEach(function(value, key){
                    
                    // data.gallery[key] == value
                if(value.type == ty || ty == 'all'){
                    type = value.type;
                    asrc = value.asrc;
                    imgSrc = value.imgSrc;
                    title = value.title;
                    detail = value.detail;


                    tagList += "<figure data-type="+ type +">";
                    tagList += "<div class='ajax'  >"
                    tagList += "<a href='" + asrc +"'>"
                    tagList += "<img src="+ imgSrc + ">";
                    tagList += "</a>"
                    tagList += "</div>"
                    tagList += "<div>"
                    tagList += "<figcaption>"+ title +"</figcaption>";
                    tagList += "<p>"+ detail +"</p>";
                    tagList += "</div>"
                    tagList += "</figure>";
                } 
                    

               
                });
                $('.red .overflow').html(tagList);
            }
            dataFun('all');
            

            $('.menu-trigger').on('click',function(e){
                e.preventDefault();
                    $('.menu-trigger span').toggleClass('active'),
                    $('.pot ul li div').toggleClass('active');
                })

            
            
            $(function() {


                $(".overflow").slick({
                  dots: true,
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: true
            
                  // fade:true,
                  // speed:1000
            
                  // centerMode: true,
                  // vertical: true
                });
            
                $('.dont button').on({
                  'beforeChange': function (event, slick, currentSlide, nextSlide) {
                    console.log('before');
                  },
                  'afterChange': function (slick, currentSlide) {
                    console.log('after');
                  }
            
                });
            
                //end
            });
           
   
        }
    });

})