/**
 * Created by Daniel on 9/6/2015.
 */
jQuery(document).ready(function(){
    $('#myAffixed').affix({
        offset: {
            top: 300,
            bottom: 500
        }
    });
    $.ajax('../blog-side-bar.html',{
        success:function(response){
            $('#myAffixed').html(response);
        }
    });
    $.ajax('../blog-nav.html',{
        success:function(response){
            $('.blog-nav').html(response);
        }
    });
    $.ajax('../blog-footer.html',{
        success:function(response){
            $('.footer').html(response);
        }
    });

    function scrollTo(id){
        $('html, body').animate({
            scrollTop:$(id).offset().top
        },2000);
    }

    function buildScroll(tag){
        $(tag).on('click', function(e){
            e.preventDefault();
            scrollTo(tag + 't');
        });
    }

    var tags = ['#web', '#mobile', '#unity', '#usaco', '#desktop', '#robots', '#csap', '#easy'];

    for(var i = 0; i < tags.length; i++){
        buildScroll(tags[i]);
    }

    $('#choose').on('click', function(e){
        e.preventDefault();
        scrollTo('#easyt');
    });

    $('#back').on('click', function(e){
        e.preventDefault();
        scrollTo('#blogintro');
    });
});

var app=angular.module("blog", []);
    app.directive("previewer",function(){
        return{
          restrict:'E',
            templateUrl:'preview.html',
            controller:function(){
                this.posts=library;
            },
            controllerAs:'preview'
        };
    });


var library=[
    {
        title:'When should you learn coding?',
        author:'Siddhartha Desai',
        date:'November 19, 2015',
        image:'images/whentolearn.jpg',
        description:"We get asked this question a lot here at Coder Central. The fact of the matter is, there really is no" +
        " 'magic' age where kids are suddenly ready to code. Read more to find out when your student is ready to code!",
        link:'blogs/when-to-learn-coding.html'
    },
    {
        title:'What Coding Language You Should Learn?',
        author:'Jerry Li',
        date:'October 11, 2015',
        image:'images/kidcoding.png',
        description:"With so many coding languages out there, what should you learn? It's actually not as hard as you might" +
        "think it is to decide on one. Read this interactive blog post to find out what coding language YOU should learn!",
        link:'blogs/what-coding-lang-to-learn.html'
    },
    {
        title:'5 activities to turn a gamer into a coder',
        author:'Daniel Huang',
        date:'October 4, 2015',
        image:'images/gamerandparents.jpeg',
        description:"Games are everywhere. They're in our pockets, laptops, game consoles, and more."+
            "Most of you must be extremely worried for your child. Look at other kids, they're studying for college "+
            " and your child is playing games all day." + "Well fortunately, it's not too difficult to convert your gamer"+
            " into a programmer - all it takes is a bit of inspiration.",
        link:'blogs/5-activities-to-turn-gamer-into-coder.html'
    }
    ];