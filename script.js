$(function() {
    
    $('#go').click(function() {
        
        
        function checkifcomplete(){
            
            if(iscomplete == false){
                iscomplete=true;
            } else {
                place = 'second';
            }
        }
        
        
        var carwidth = $('#car1').width();
        var carwidth11=$('#car2').width();
        
        var racetrackwidth = $(window).width()-carwidth;
        
        var racetime1 = Math.floor( (Math.random()*5000)+1);
        var racetime2 = Math.floor( (Math.random()*5000)+1);
        
        var iscomplete=false;
        
        var place="first";
        
        $('#car1').animate({
            
            left: racetrackwidth
            
            
        },racetime1,function() {
            
            
            checkifcomplete();
            $("#raceinfo1 span").text('finished in '+place+'place and clocked in at '+racetime1+'miliionsecond');
        });
        
        
          $('#car2').animate({
            
            left: racetrackwidth
            
            
        },racetime2,function() {
            
            
            checkifcomplete();
            $("#raceinfo2 span").text('finished in '+place+'place and clocked in at '+racetime2+'miliionsecond');
        });
            
        
    });
    $('#reset').click(function(){
        $('.car').css('left','0') ;
        $('.raceinfo span').text("");
        
    });
    
    
    
    
    
});

