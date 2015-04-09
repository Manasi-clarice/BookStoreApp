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
        $scope.selectedCategories = {all : true};
        $scope.searchByOptions = [{name:"Title",field:"title"},{name:'Author',field:"author"}];
        $scope.searchBy =$scope.searchByOptions[0];
        httpService.getBooks().then(function(res){
            $scope.books = res.data;
        });

        httpService.getBookCategories().then(function(res){
            $scope.bookCategories = res.data;
            for(var i = 0; i < $scope.bookCategories.length; i++){
                $scope.selectedCategories[$scope.bookCategories[i].category] = false;
            }
            $scope.$watchCollection('selectedCategories',function(newCollection,oldCollection){
                var noFilterFlag = true;
                for(cat in newCollection){
                    if(cat =='all'){
                        continue;
                    }else {
                        if(newCollection[cat]==true){
                            newCollection['all'] = false;
                            noFilterFlag = false;
                            break;
                        }
                    }
                }
                if(noFilterFlag == true){
                    newCollection.all = true;
                }
            });
        });

        $scope.selectCategory = function (category,value){
            console.log($scope.selectedCategories);
            //if($scope.selectedCategories.indexOf(category.category) == -1){
            //    $scope.selectedCategories.push(category.category);
            //}
            //
            //alert($scope.selectedCategories);
        }
    }]);

