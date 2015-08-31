/**
 * Created by Daniel on 7/15/2015.
 */


jQuery(document).ready(function(){
    homeAnimation();
    circle_animation('robotics');
    circle_animation('apcs');
    circle_animation('webdev');
    aboutPage();
    paths();
    $.ajax('navbar.html',{
        success:function(response){
            $('nav').html(response);
        }
    });
    $.ajax('footer.html',{
        success:function(response){
            $('.footer').html(response);
        }
    });



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
                "width":'60%'
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

    // Set height of the tiles based on the width
    tiles[0].css({
        height:$('#instructor-tile').width()*0.398+"px"
    });
    tiles[1].css({
        height:$('#event-tile').width()*.96+"px"
    });
    tiles[2].css({
        height:$('#blog-tile').width()*.96+"px"
    });
    tiles[3].css({
        height:$('#register-tile').width()*1.371+"px"
    });

    
    var tile=$('.tiles');

    // If on desktop, when mouse hovers over a tile, increase the font size and tile color
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
    }
}

function circle_animation(name, scalarEnlarge, lh1, lh2, speed) {
    // Default values for lh1, lh2 to vertically align text and speed
    scalarEnlarge = typeof scalarEnlarge !== 'undefined' ? scalarEnlarge : 1.1;
    lh1 = typeof lh1 !== 'undefined' ? a : 0.93;
    lh2 = typeof lh2 !== 'undefined' ? a : 0.87;
    speed = typeof speed != 'undefined' ? speed : 175;

    var circleName = '.'+name+'-circle';
    var circleDim = 140;

    // Equation so that circle to enlarge in the center
    var enlarge = (circleDim / 2) * (scalarEnlarge - 1);

    //Multiple selectors to select specific track
    var combinedBox = circleName + '.track-box';
    var combinedCircle = circleName + '.track-circle';
    var combinedMiddle = circleName + '.track-box-middle'

    // mouseenter - circle gets bigger, mouseleave - returns to normal size
    $(combinedBox).on('mouseenter mouseleave', function (ev) {
        if(ev.type == 'mouseenter'){
            $(combinedCircle).animate({'height': scalarEnlarge*circleDim+'px', 'width': scalarEnlarge*circleDim+'px'}, speed);
            $(combinedMiddle).animate({'padding': 20+'px'}, speed);
        } else {
            $(combinedCircle).animate({'height': circleDim+'px', 'width': circleDim+'px'}, speed);
            $(combinedMiddle).animate({'padding': 25+'px'}, speed);
        }
    });
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
    var tracks=[$('#blue-track'),$('#red-track'),$('#yellow-track')];
    var grey=$('#grey');
    tracks[0].on('mouseenter',function(){
        $('#blue').fadeIn();
    });
    tracks[0].on('mouseout',function(){
        $('#blue').fadeOut();
    });
    tracks[1].on('mouseenter',function(){
        $('#red').fadeIn();
    });
    tracks[1].on('mouseout',function(){
        $('#red').fadeOut();
    });
    tracks[2].on('mouseenter',function(){
        $('#yellow').fadeIn();
    });
    tracks[2].on('mouseout',function(){
        $('#yellow').fadeOut();
    });
}