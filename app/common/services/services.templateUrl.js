/**
 * Created by msakhare on 4/7/2015.
 */
angular.module('commonModule').service('templateUrl',function(){
    this. url = "/common/directives/";

    this.getUrl = function(){
      return this.url;
    };
});