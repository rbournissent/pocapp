'use strict';

angular.module('pocappApp')
    .controller('ArtistsCtrl', function($scope, $http, artistsFactory, dataFactory) {
        $scope.artistFilter = '';
        $scope.artists = dataFactory.getData('artists');

        $scope.$watch('artists', function () {
        	dataFactory.setData('artists', $scope.artists);
        }, true);

        if(!$scope.artists)
        {
	        artistsFactory.query()
	            .then(function(artists) {
	            	console.log('Los tuve que buscar');
	                $scope.artists = artists;
	            });
	    }
	    else
	    {
	    	console.log('Los tenía en Local');
	    	console.log($scope.artists);
	    }
    });