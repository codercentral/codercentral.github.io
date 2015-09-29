/**
 * Created by Daniel on 9/28/2015.
 */
jQuery(document).ready(function(){
    var intro=$('#intro-text');
    var nextSlide=false;
    var slideshow=$('.carousel');
    $('.intro').fadeIn();
    intro.css({display:'inline'});
    slideshow.carousel('pause');
    setTimeout(function(){
        intro.typed({
            strings: ["Hi, I'm Daniel, founder and instructor at Coder Central!",
                " My team and I want to help you discover how you can solve " +
                "real world problems through coding!",
                " We provide small group environments, cool video walkthroughs, and collaborative challenges" +
                " to help you learn through your own curiosity!", "Go to our Register page to schedule a free 15 minute online consultation" +
                " with our team of instructors.", "If you want a sample of our classes, check out our upcoming events for free workshops" +
                "hackathons, and more!.",
                "We're excited to meet you!"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
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
                },5000);
            }
        });
    },3100);

});
