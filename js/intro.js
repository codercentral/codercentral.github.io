/**
 * Created by Daniel on 8/31/2015.
 */
jQuery(document).ready(function(){
    var body=$('body');
    $.ajax('navbar.html',{
        success:function(response){
            $('nav').html(response);
        }
    });
    setTimeout(function(){
        if(body.scrollLeft()==0){
            $('.navbar').addClass('clear-nav');
        }else{
            $('.navbar').removeClass('clear-nav');
        }
    },500);
    $(window).scroll(function(){
        if(body.scrollLeft()==0){
            $('.navbar').switchClass('blah','clear-nav',500,"swing" );
            $('#nav').fadeOut();
        }else{
            $('.navbar').switchClass('clear-nav','blah',500,"swing" );
            $('#nav').fadeIn('slow');
        }


    });

    var pg=$(".page");
    //allows all arrows to scroll to certain sections of the page

    var width=$(window).width();
    body.css({'width':width*5.4+'px'});
    pg.css({'width':width*1.013+'px'});
    var scroll=$('.scroll');
    scroll.bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left
            }, 1200);
    });
    var home=$('#home');
    //navigation through swiping (desktop and mobile)
    pg.swipe( {swipe:swipe1,allowPageScroll:"vertical"});
    function  swipe1(event, direction, distance, duration) {
        var currentElement = this.next();
        var lastEl=this.prev();
        if(this[0] != home[0]){
            if(direction=="left"){
                $('html, body').animate({scrollLeft: $(currentElement).offset().left}, 300);
            }else if( direction=="right"){
                if(typeof this.prev()[0]=== 'undefined')
                    $('html, body').animate({scrollLeft: 0}, 300);
                else
                    $('html, body').animate({scrollLeft: $(lastEl).offset().left}, 300);
            }
        }else{
            $('html, body').animate({scrollLeft: width*1.013}, 300);
        }
        console.log("swiped" + direction);
    }

    //things to do on scroll if not on mobile
    if($(window).width()>400){
        $(window).on('scroll',function(){
            var horizontalPos=document.documentElement.scrollLeft || document.body.scrollLeft;
            var newsPos=$('#pg-content-0').offset();
            var directPos=$('#directions').offset();
            var contactPos=$('#contact').offset();
            var nextNews=(horizontalPos>(newsPos.left-1));
            if(nextNews){
                setTimeout(function(){
                    $('.left').animate({
                        'opacity':1,
                        left:35+'%'
                    },1000);
                    $('.right').animate({
                        'opacity':1,
                        right:35+'%'
                    },1000);
                },100);
            }
        });
    }


    $('#title').delay(800).fadeIn(1500);
    //add typing animation on desktops
    if($(window).width()>400){
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
                $('.landing-header').slideDown('slow');
                $('.landing-content').slide('right');
            }
        });
    }else{
        setTimeout(function(){$('.text-stuff').fadeIn(1000);
            $('#real-content').fadeIn(1000);
            $('#landing-nav').animate({
                'opacity':1,
                'right':40+'px'
            },2000);},1500);
    }

});

var app=angular.module("home", []);
app.controller("navigation",function(){
    var nav=this;
    nav.page=sections;
    nav.currentPage=1;
    nav.nextPage=function(direction){
        if(direction=='right')
            nav.currentPage++;
        else if(direction=='left')
            nav.currentPage--;
        if(nav.currentPage>4&& direction=='right')
            return;
        console.log(nav.page[nav.currentPage].link);
        $("html, body").animate({
            scrollLeft:$(nav.page[nav.currentPage].link).offset().left
        }, 1200);

    }
});

var sections=[
    {
        title:'introdction',
        link:"#home",
        page:0
    },
    {
        title:'students teaching students',
        link:"#intro",
        page:1
    },
    {
        title:'Interdisciplinary corses',
        link:'#newsletter',
        page:2
    },
    {
        title:'Pay What you want',
        link:'#directions',
        page:3
    },
    {
        title:'We are partnered with',
        link:'#contact',
        page:4
    }
];