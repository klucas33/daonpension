$(function(){
    var i = 0,all = 0;
    
        $('.tab tr td span label').on('click',function(){
            if( $(this).prev().prop('disabled') ) return;
            
            $(this).toggleClass('active')
            order()  
        })

        $('.tab select').on('change', function(){
            order()
        })

    function order(){
        var roomPrice = 90000;
        var adultPrice = 20000;
        var total = 0, adultNum=0;
        var result = 0;

        $('.tab tr').each(function(){
            if($(this).find('label').hasClass('active')){
                var day = $(this).find('select[name=time]').val();
                var adult = $(this).find('select[name=adult]').val();
                
                if(adult > 2){
                    adultNum = adult - 2;
                }
                total = (day * roomPrice ) + (adultPrice * adultNum);
                $(this).find('td:last p').text(total+'원')

                result += total;
            }
        })

        $('.box span').text(result);
    }



    $('#datepicker').datepicker({
    	language: 'en',
        timepicker: true,
        timeFormat: 'hh:ii AA'
    }); 
    
    var d = new Date();
    var month = d.getMonth(); //Removed +1
    var day = d.getDate();
    var year = d.getFullYear();
    var months = ['January','February','3월','April','May','June','July','August','Septempber','October','November','December'];
    var minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
    var hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    var ampm = d.getHours() >= 12 ? '<sup>PM<sup>' : '<sup>AM<sup>';
    document.getElementById("time").innerHTML = d.getDate() + ' ' + months[month]+' '+d.getFullYear()+' '+hours +':'+minutes + ' ';
    document.getElementById("coke").innerHTML =  d.getFullYear()+' ' +   months[month]+' ';     
    
})