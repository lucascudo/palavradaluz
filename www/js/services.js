angular.module('starter.services', [])

.factory('YoutubeFactory', function ($http) {
    return {
        getChannelVideos: function (youtubeParams) {
            youtubeParams.key = 'AIzaSyDa2nNiaFBE-4xGAN5txtR03-T6FwuJGn8';
            return $http.get('https://www.googleapis.com/youtube/v3/search', {params: youtubeParams});
        }   
    };
});