$(function(){
    var unavailableDates = [
        {start:'2015-09-11', end:'2015-09-15'},
        {start:'2015-09-15', end:'2015-09-23'},
        {start:'2015-10-01', end:'2015-10-07'}
    ];


    $('#calendar').availabilityCalendar(unavailableDates);

})