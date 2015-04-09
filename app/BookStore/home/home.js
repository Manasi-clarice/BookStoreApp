/**
 * Created by msakhare on 4/7/2015.
 */


angular.module('BookStore.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'BookStore/home/home.html',
            controller: 'HomeController'
        });
    }])
    .controller('HomeController',function(){
        //alert("Home Controller");
    });
