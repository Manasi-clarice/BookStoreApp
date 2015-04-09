/**
 * Created by msakhare on 4/7/2015.
 */

angular.module('BookStore.booksList', ['ngRoute','commonModule'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/booksList', {
            templateUrl: 'BookStore/booksList/booksList.html',
            controller: 'BookListController'
        });
        $routeProvider.when('/booksList/:bookid', {
            templateUrl: 'BookStore/booksList/views/book-detail.html',
            controller: 'bookDetailController'
        });
    }])
    .controller('BookListController',['$scope','HttpService',function($scope,httpService){
        $scope.books = [];
        $scope.bookCategories = [];
        $scope.searchQuery = "";
        $scope.searchByOptions = [{name:"Title",field:"title"},{name:'Author',field:"author"}];
        $scope.searchBy =$scope.searchByOptions[0];
        httpService.getBooks().then(function(res){
            $scope.books = res.data;
        });

        httpService.getBookCategories().then(function(res){
            $scope.bookCategories = res.data;
        });
    }]);

