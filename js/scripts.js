/**
 * Created by Daniel on 7/15/2015.
 */


jQuery(document).ready(function(){

//    htmlCourse();

    var winWidth= $(window).width();
    homeAnimation();
    aboutPage();
    paths();
});


function htmlCourse(){
    var winHeight= $(window).height();
    var winWidth = $(window).width();
    var actualHeight=(winHeight/10*7);

}
function homeAnimation(){
        var winHeight=$(window).height();
        var winWidth= $(window).width();
        var aboutH;
        $('.home-bg').fadeIn(2000);

        setTimeout(function(){
            $('#aboutInfo').animate({
                "width":'50%'
            },2000,function(){
                $('#welcome').fadeIn();
            });
        },1000);
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    },  6000);
    var tiles=[$('#instructor-tile'),$('#event-tile'),$('#blog-tile'),$('#register-tile')];

    tiles[0].css({
        height:$('#instructor-tile').width()*1.37+"px"
    });
    tiles[1].css({
        height:$('#event-tile').width() *.96+"px"
    });
    tiles[2].css({
        height:($('#blog-tile').width() *.96)+"px"
    });
    tiles[3].css({
        height:$('#register-tile').width()*.4+"px"
    });

    var tile=$('.tiles');

        if(winWidth>757){
            //this makes text larger
            tile.on("mouseenter",'.flip-text',function(){
                $(this).animate({
                    'font-size':'35px'
                },100);
                $(this).parent().addClass('shaded');
            });
            tile.on('mouseout','.flip-text',function(){
                $(this).animate({
                    'font-size':'30px'
                },100);
                $(this).parent().removeClass('shaded');
            });
            //this sets up the heights of the slider and introduction text
            aboutH=winHeight*.1;
            $('#aboutInfo').css({
                'top': aboutH +'px'
            });
            $('#home-welcome').css({
                'top':(winHeight *.35)+'px'
            });
        }else{
            aboutH=winHeight*.25;
            $('#aboutInfo').css({
                'top': aboutH +'px'
            });

            aboutH=winHeight*.819;
            $('home-banner').css({
               'height':aboutH+'px'
            });
        }
}
function aboutPage(){
    var winHeight= $(window).height();
    var abtTileH=winHeight*.27;
    var abtTileH2=winHeight*.56;
    var abtTile=$('.abt-tiles');
    abtTile.css({
        'height': abtTileH+'px'
    });
    $('.abt-tiles-tall').css({
        'height':abtTileH2+'px'
    });
}

function paths(){
    $('#blue-track').on('mouseenter',function(){
        $('#blue').fadeIn();
    });
    $('#blue-track').on('mouseout',function(){
        $('#blue').fadeOut();
    });
    $('#red-track').on('mouseenter',function(){
        $('#red').fadeIn();
    });
    $('#red-track').on('mouseout',function(){
        $('#red').fadeOut();
    });
    $('#yellow-track').on('mouseenter',function(){
        $('#yellow').fadeIn();
    });
    $('#yellow-track').on('mouseout',function(){
        $('#yellow').fadeOut();
    });
}