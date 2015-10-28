/**
 * Created by Daniel on 8/31/2015.
 */
jQuery(document).ready(function(){

    //temperary nav bar stuff
    $("#banner a").bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top }, 1200);
    });

    //allows all arrows to scroll to certain sections of the page
    var scroll=$('.scroll');
    scroll.bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top }, 1200);
    });

    //things to do on scroll
    $(window).on('scroll',function(){
        var horizontalPos=$('body').scrollLeft();
        var newsPos=$('#pg-content-1').offset();
        var directPos=$('#directions').offset();
        var contactPos=$('#contact').offset();
        var nextNews=(horizontalPos>(newsPos.left-1));
        if(nextNews){
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
               fadeOut();
            });
            $('.right').on('click',function(){
                fadeOut();
            });

        }
    });

    $('#title').delay(800).fadeIn(1500);
    $('#slogan').typed({
        strings: [">Learning Powered by Curiosity"],
        // typing speed
        typeSpeed: 10,
        // time before typing starts
        startDelay: 2000,
        loopCount: false,
        // show cursor
        showCursor: false,
        callback:function(){
            $('.text-stuff').fadeIn(1000);
            $('#landing-nav').animate({
                'opacity':1,
                'right':40+'px'
            },2000);
        }
    });



});


function fadeOut(){
    $('.left').animate({
        'opacity':0,
        left:90+'px'
    },1000);
    $('.right').animate({
        'opacity':0,
        right:90+'px'
    },1000);
}