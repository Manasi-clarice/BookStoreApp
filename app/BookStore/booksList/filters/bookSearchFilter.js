/**
 * Created by msakhare on 4/8/2015.
 */

angular.module('BookStore.booksList').filter('bookSearchFilter',function(){
    return function (items,query, searchOnField) {
        var filtered = [];
        //var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
           if(item[searchOnField].toLowerCase().indexOf(query.toLowerCase())>-1){
               filtered.push(item);
           }
        }
        return filtered;
    };
});
