/**
 * Created by msakhare on 4/7/2015.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('BookStore', [
    'ngRoute',
    'BookStore.home',
    'BookStore.booksList'/*,
    'commonModule'*/
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
   /* $routeProvider.when('/home', {
        templateUrl: 'BookStore/home/home.html',
        controller: 'View1Ctrl'
    });*/
}]);

