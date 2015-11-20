/**
 * Created by Daniel on 11/20/2015.
 */

var app=angular.module("register", []);
app.controller('RegistrationController',function(){
    this.tab=1;
    this.selectTab=function(settab){
        this.tab=settab;
    };
    this.isSelected=function(checktab){
        return this.tab==checktab;
    }
});

app.directive("PtownRegisterForm",function(){
    return{
        restrict:'E',
        templateUrl:'register-pleasanton.html'
    };
});
app.directive("NewarkRegisterForm",function(){
    return{
        restrict:'E',
        templateUrl:'register-newark.html'
    };
});