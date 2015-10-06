/**
 * Created by Daniel on 9/6/2015.
 */
jQuery(document).ready(function(){
    $('#myAffixed').affix({
        offset: {
            top: 300,
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
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
    $.ajax('../footer.html',{
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
        title:'5 activities to turn a gamer into a coder',
        author:'Daniel Huang',
        date:'October 4, 2015',
        image:'images/gamerandparents.jpeg',
        description:"Games are everywhere. They're in our pockets, laptops, game consoles, and more."+
            "Most of you must be extremely worried for your child. Look at other kids, they're studying for college "+
            " and your child is playing games all day." + "Well fortunately, it's not too difficult to convert your gamer"+
            " into a programmer - all it takes is a bit of inspiration.",
        link:'blogs/5-activities-to-turn-gamer-into-coder.html'
    },
    {
        title:'5 Reasons Why You Should Learn Python',
        author:'Sidd Desai',
        date:'September 7, 2015',
        description:"Python is cool. Python is easy to learn. Python was named after Monthy Python. Python is a popular scripting" +
        "language. What other reasons do you need? Learn it. Learn it NOWWWWW!"
    }
    ];