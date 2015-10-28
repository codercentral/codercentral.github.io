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
    /*
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
        },3500);*/

});


function introduction(){


}