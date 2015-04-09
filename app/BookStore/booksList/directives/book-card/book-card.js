/**
 * Created by msakhare on 4/9/2015.
 */

angular.module('BookStore.booksList')
    .directive('bookCard',function(){
        return {
            restrict : 'E',
            replace : true,
            templateUrl : "BookStore/booksList/directives/book-card/book-card.html",
            scope : {
                book : "="
            },
            link : function(){

            }
        }
    });