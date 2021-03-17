$(function(){
    var i = 0
    $('.tab tr td span label').each(function(i,e){
        $(this).on('click',function(){
            $(this).toggleClass('active')

        if($(this).hasClass('active')){
            
        }else{

        }
     })
    })

    $("#datepicker").datepicker({
        
    	language: 'ko',
        timepicker: true,
        timeFormat: 'hh:ii AA'
    }); 
    
    
        
    
})