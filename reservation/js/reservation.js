$(function(){
    var i = 0,all = 0;
    
        $('.tab tr td span label').on('click',function(){
            $(this).toggleClass('active')

            $('.tab tr').each(function(){
                if($(this).find('label').hasClass('active')){
                    
                    var total = $(this).find('.purple option').filter(':selected').val() * '90000';                    
                    $(this).find('td:last p').text(total+'원')

                    all = parseInt( $(this).find('td:last p').text() ) * $('.tab tr label.active').length;
                    $('.last .box span').text(all)

                    $('.purple option:selected').val() * $(this).find('td:last p').val(total)

                }else{
                    $(this).find('td:last p').text('0원')
                    $('.last .box span').text('0') * $('.tab tr label.active').length;
                }

          
                               
            })
    })
        
    
    $('#datepicker').datepicker({
    	language: 'ko',
        timepicker: true,
        timeFormat: 'hh:ii AA'
    }); 
    
    
        
    
})