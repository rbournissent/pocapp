'use strict';

angular.module('pocappApp')
    .factory('songsFactory', function($http) {
        var artist = null;
        var songs = [];

        function getArtist () {
        	return artist;
        }

        function setArtist(artist) {
            
        	$http.get('/api/1/songs.json')
                .then(function(songsCollection) {
                    var songs = [];
                	angular.forEach(songsCollection.data, function(song) {
                		var i = 0;
                        if(song.artist_id == artist.id) {
                        	songs[i] = song;
                        	i++;
                        }
                    });
                    artist.songs = songs;
                });
        }

        function getSongs () {
        	return songs;
        }

        function setSongs (songs) {
        	this.songs = songs;
        }

        // Expose inner function / public API
        return {
            setArtist: setArtist,
            getSongs: getSongs            
        };
    });