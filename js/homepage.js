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
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            onStringTyped: function() {
                setTimeout(function(){
                    slideshow.carousel('next');
                },1000);

            }
        });
    },3100);


});
