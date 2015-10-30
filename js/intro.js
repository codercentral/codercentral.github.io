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
    var body=$('body');
    var width=$(window).width();
    body.css({'width':width*4.4+'px'});
    $('.page').css({'width':width*1.013+'px'});
    var scroll=$('.scroll');
    scroll.bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top }, 1200);
    });
    $('.page').swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration) {
            var currentElement = this.next();
            var lastEl=this.prev();
            if(this[0] != $('#home')[0]){
                if(direction=="left"){
                    $('html, body').animate({scrollLeft: $(currentElement).offset().left}, 800);
                }else if( direction=="right"){
                    if(typeof this.prev()[0]=== 'undefined')
                        $('html, body').animate({scrollLeft: 0}, 800);
                    else
                        $('html, body').animate({scrollLeft: $(lastEl).offset().left}, 800);

                }
            }else{
                    $('html, body').animate({scrollLeft: width*1.013}, 800);
            }
            console.log("swiped" + direction);
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
    });
    
    //things to do on scroll if not on mobile
    if($(window).width()>400){
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
                },100);
                $('.left').on('click',function(){
                    fadeOut();
                });
                $('.right').on('click',function(){
                    fadeOut();
                });
            }
        });
    }


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
            $('#real-content').fadeIn(1000);
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