$(function(){
    $('#grid-demo').rdmGrid();


    var gridForLoop = $('#grid-demo').rdmGrid();
    setInterval(() => { gridForLoop.trigger();
}, 2500);


$('#grid-demo').rdmGrid({

      animationSpeed: 350,

      breakPoint:   800,

      btns:    'rg_btn',

      columns:      3,

      fadeInSpeed:  350,

      initialShuffle:true,

      responsive:  true

    });
    
})