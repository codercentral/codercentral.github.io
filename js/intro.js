/**
 * Created by Daniel on 8/31/2015.
 */
jQuery(document).ready(function(){

//    htmlCourse();
    var introText=$(".element");
    var outro=$('.outro');
    introText.typed({
        strings: ["} Coder.Central();"],
        // typing speed
        typeSpeed: 80,
        // time before typing starts
        startDelay: 400,
        loopCount: false,
        // show cursor
        showCursor: true,
        callback:function(){
            $('.typed-cursor').fadeOut('fast');
        }
    });

    var winHeight= $(window).height();
    //var winWidth= $(window).width();
    var introHeight=(winHeight/2-100);
    $('#intro').css({
        'top': introHeight+'px'
    });
    setTimeout(function(){
        introText.fadeOut('medium');
        outro.typed({
            strings: ["> Be Inspired."],
            // typing speed
            typeSpeed: 80,
            // time before typing starts
            startDelay: 300,
            loopCount: false,
            // show cursor
            showCursor: true,
            callback: function() {
                setTimeout(function(){
                    $('#intro').fadeOut();
                },800);
                setTimeout(function(){
                    window.location = "homepage.html";
                },1000);
            }
        });
    },3500);

});


function introduction(){


}