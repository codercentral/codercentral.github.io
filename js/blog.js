/**
 * Created by Daniel on 9/6/2015.
 */
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
        title:'How to turn your gamer into a programmer',
        author:'Daniel Huang',
        date:'September 6, 2015',
        description:"Games are everywhere. They're in our pockets, laptops, game consoles, and more."+
            "Most of you must be extremely worried for your child. Look at other kids, they're studying for college "+
            "and your child is playing games all day." + "Well fortunately, it's not too difficult to convert your gamer"+
            "into a programmer- all it takes is a bit of inspiration."
    },
    {
        title:'5 Reasons Why You Should Learn Python',
        author:'Sidd Desai',
        date:'September 7, 2015',
        description:"Python is cool. Python is easy to learn. Python was named after Monthy Python. Python is a popular scripting" +
        "language. What other reasons do you need? Learn it. Learn it NOWWWWW!"
    }
    ];