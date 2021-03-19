$(function(){
    var i = 0,all = 0;
    
        $('.tab tr td span label').on('click',function(){
            $(this).toggleClass('active')
            order()  
        })

        $('.tab tr').find('select').change(function(){
            console.log($('.purple').val())
            change()
        })

    function order(){



        $('.tab tr').each(function(){
            if($(this).find('label').hasClass('active')){
                var total = $(this).find('.purple option').filter(':selected').val() * '90000';                    
                $(this).find('td:last p').text(total+'원')

                // $('.purple').find('option:selected').val() * $(this).find('td:last p').val();

                all = parseInt( $(this).find('td:last p').text() ) * $('.tab tr label.active').length;
                $('.last .box span').text(all)

                // $('.purple option:selected').val() * $(this).find('td:last p').val(total)

            }else{
                $(this).find('td:last p').text('0원')
                // $('.last .box span').text('0') * $('.tab tr label.active').length;
            }

            if($(this).find('input').is(':disabled') && $('.last .box span').val() == 0 ){
                $(this).find('td:last p').text('0원')
                $('.last .box span').text('0')
            }
      
                           
        })
    }

    function change(){    
        $('.tab tr').each(function(){
            $(this).find('.purple').on('change',function(){
                $(this).find('td:last p').text() * $(this).find('.purple').val()
            })
        })
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