/**
 * Created by msakhare on 4/7/2015.
 */


angular.module('BookStore.home', ['ngRoute','ui.router'])
    .config(['$routeProvider','$stateProvider','$urlRouterProvider', function($routeProvider ,$stateProvider,$urlRouterProvider) {
       /* $routeProvider.when('/home', {
            templateUrl: 'BookStore/home/home.html',
            controller: 'HomeController'
        });*/
        $stateProvider.state('home',{
            url : '/home',
            templateUrl :'BookStore/home/home.html',
            controller: 'HomeController'
        });
    }])
    .controller('HomeController',function(){
        //alert("Home Controller");
    });
