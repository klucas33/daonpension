$(function(){
    var i = 0,all = 0;
    
        $('.tab tr td span label').on('click',function(){
            $(this).toggleClass('active')

            $('.tab tr').each(function(){
                if($(this).find('label').hasClass('active')){
                    console.log()
                    
                    var total = $(this).find('.purple option').filter(':selected').val() * '90000';
                    
                    $(this).find('td:last p').text(total+'원')

                    all = parseInt( $(this).find('td:last p').text() ) * $('.tab tr label.active').length;
                    $('.last .box span').text(all)
                }else{
                    $(this).find('td:last p').text('0원')
                }

                if($('.tab tr td:nth-of-type(4) select option').val() > 2){
                    
                }
            })
    })
        
    
    $('#datepicker').datepicker({
        
    	language: 'ko',
        timepicker: true,
        timeFormat: 'hh:ii AA'
    }); 
    
    
        
    
})