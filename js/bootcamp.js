/**
 * Created by jerrylinew on 11/7/15.
 */

jQuery(document).ready(function(){
    function scrollTo(id){
        $('html, body').animate({
            scrollTop:$(id).offset().top - 90
        },2000);
    }

    function buildScroll(tag){
        $(tag).on('click', function(e){
            e.preventDefault();
            scrollTo(tag + 'h');
        });
    }

    var tags = ['#overview', '#logistics', '#payment', '#instructor'];

    for(var i = 0; i < tags.length; i++){
        buildScroll(tags[i]);
    }
});