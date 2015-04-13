/**
 * Created by msakhare on 4/7/2015.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('BookStore', [
    'ngRoute','ui.router',
    'BookStore.home',
    'BookStore.booksList'/*,
    'commonModule'*/
]).config(['$routeProvider','$stateProvider','$urlRouterProvider', function($routeProvider, $stateProvider,$urlRouteProvider) {
    //$routeProvider.otherwise({redirectTo: '/home'});
    $urlRouteProvider.when('','/home');

}]);

