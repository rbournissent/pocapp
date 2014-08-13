'use strict';

angular.module('pocappApp')
// Meant to be used under a scope where there is an "artist" defined
.directive('songs', function() {
   return {
      restrict: 'E',
      scope: {
         songsCollection: '=songsCollection',
         expanded: '=expanded',
         filterBy: '=filterBy'
      },
      templateUrl: 'partials/songsList.html'
   };
});