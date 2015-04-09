/**
 * Created by msakhare on 4/7/2015.
 */
angular.module('commonModule').service('HttpService',['$http','$q',function($http,$q){
       var booksList = null;
    var bookCategories = null;

       this.getBooks = function(){
           var deferred = $q.defer();
           if(booksList !== null){
               deferred.resolve(booksList);
           }else {
               $http.get("data/books.json").then(function(response){
                   console.log("data here");
                   console.log(response);
                   deferred.resolve(response);
               },function(error){
                   deferred.reject(error);
               });
           }

           return deferred.promise;
       };

    this.getBookCategories = function(){
        var deferred = $q.defer();
        if(bookCategories !== null){
            deferred.resolve(bookCategories);
        }else {
            $http.get("data/book-categories.json").then(function(response){
                console.log("data here");
                console.log(response);
                deferred.resolve(response);
            },function(error){
                deferred.reject(error);
            });
        }

        return deferred.promise;
    };

       this.addBook = function(book){
           if(booksList == null){
               booksList= [];
           }
               booksList.push(book);
       }
}]);
