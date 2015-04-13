/**
 * Created by msakhare on 4/8/2015.
 */
angular.module('BookStore.booksList').controller('bookDetailController',['$scope','$routeParams','HttpService','$stateParams',
    function(scope,routeParams,httpService,stateParams){
        var books = null;
        var categoriesArray = [];
        scope.categoriesMap = {};
            scope.book = null;
            httpService.getBooks().then(function(res){
                books = res.data;
                //scope.book = books[routeParams.bookid];
                scope.book = books[stateParams.bookid];
            });

            httpService.getBookCategories().then(function(res){
                categoriesArray = res.data;
                for(var i = 0; i < categoriesArray.length; i++){
                    scope.categoriesMap[categoriesArray[i].category] = categoriesArray[i].categoryName;
                }
            });

    }]);