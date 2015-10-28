/**
 * Created by Daniel on 8/31/2015.
 */
jQuery(document).ready(function(){
    $("#banner a").bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top }, 1200);
    });
    var scroll=$('.scroll');
    scroll.bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top }, 1200);
    });
    $(window).on('scroll',function(){
        var horizontalPos=$('body').scrollLeft();
        var newsPos=$('#pg-content-1').offset();
        var nextPg=(horizontalPos>(newsPos.left-1));
        //console.log('horizontal position: ' + horizontalPos);
        //console.log('newsletter position: ' + newsPos.left);
        /*$('.left').animate({
            'opacity':0,
            left:90+'px'
        },1000);
        $('.right').animate({
            'opacity':0,
            right:90+'px'
        },1000);*/
        if(nextPg){
            setTimeout(function(){
                $('.left').animate({
                    'opacity':1,
                    left:40+'px'
                },1000);
                $('.right').animate({
                    'opacity':1,
                    right:40+'px'
                },1000);
                console.log('arrows fading in');
            },100);
            $('.left').on('click',function(){
                $('.left').animate({
                    'opacity':0,
                    left:90+'px'
                },1000);
                $('.right').animate({
                    'opacity':0,
                    right:90+'px'
                },1000);
            });
            $('.right').on('click',function(){
                $('.left').animate({
                    'opacity':0,
                    left:90+'px'
                },1000);
                $('.right').animate({
                    'opacity':0,
                    right:90+'px'
                },1000);
            });
        }
    });

    $('#title').delay(800).fadeIn(1500);
    $('#slogan').typed({
        strings: [">Learning Powered by Curiosity"],
        // typing speed
        typeSpeed: 20,
        // time before typing starts
        startDelay: 2000,
        loopCount: false,
        // show cursor
        showCursor: false,
        callback:function(){
            $('.text-stuff').fadeIn(1000);
            $('.scroller').animate({
                'opacity':1,
                'right':40+'px'
            },1000);
        }
    });


});


function introduction(){


}