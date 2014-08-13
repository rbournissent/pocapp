'use strict';

angular.module('pocappApp')
    .factory('artistsFactory', function($http, songsFactory) {
        var artists = [];

        function getArtists() {
            return artists;
        }

        function getArtistById(id) {
            for (var i = 0; i < artists.length; i++) {
                if (artists[i].id == id) {
                    return artists[i];
                }
            }
        }

        function query() {
            return $http.get('/api/1/artists.json')
                .then(function(artistsCollection) {
                    angular.forEach(artistsCollection.data, function(value, key) {
                        songsFactory.setArtist(value);
                        artists[key] = value;
                    
                    });
                    return artists;
                }, function(argument) {
                    console.error(argument);
                });
        }

        // Expose inner function / public API
        return {
            getArtists: getArtists,
            getArtistById: getArtistById,
            query: query
        };
    });