/**
 * Created by Daniel on 9/28/2015.
 */
jQuery(document).ready(function(){
    var intro=$('#intro-text');
    var slideNum=1;
    var slideshow=$('.carousel');
    $('.intro').fadeIn();
    intro.css({display:'inline'});
    slideshow.carousel('pause');
    setTimeout(function(){
        intro.typed({
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: $('.typed-text'),
            // typing speed
            typeSpeed: 10,
            // time before typing starts
            startDelay:1000,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 1000,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            onStringTyped: function() {
                setTimeout(function(){
                    slideshow.carousel('next');
                },slideDelay(slideNum));
                slideNum++;
                if(slideNum>4){
                    slideNum=1;
                }
            }
        });
    },3100);

    function slideDelay(currSlide){
        if(currSlide==1){
            return 6500;
        }
        if(currSlide==2){
            return 4500;
        }
        if(currSlide==3){
            return 5300;
        }
        if(currSlide==4){
            return 2000;
        }
    }

});
