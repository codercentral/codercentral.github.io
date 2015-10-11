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
        title:'What Coding Language You Should Learn?',
        author:'Jerry Li',
        date:'October 11, 2015',
        image:'images/prog-languages.png',
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