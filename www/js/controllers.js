function VideoCtrl() {
    
}

angular.module('starter.controllers', [])

.controller('TextCtrl', function ($ionicLoading, $rootScope, $scope, ionicMaterialInk, ionicMaterialMotion, BooksFactory) {
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
    $ionicLoading.show();
    $scope.ebooks = BooksFactory.getEbooks();
    $ionicLoading.hide();
})
.controller('MessageCtrl', function ($ionicLoading, $scope, ionicMaterialInk, ionicMaterialMotion) {
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
    $ionicLoading.show();
    $scope.message = {
        text: 'Ainda não possuímos mensagens personalizadas =(',
        author: 'ROCHA, Lucas T.'
    };
    $ionicLoading.hide();
})
.controller('VideoCtrl', function($ionicLoading, $http, $rootScope, $scope, $state, ionicMaterialInk, ionicMaterialMotion, YoutubeFactory){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
    $ionicLoading.show();
    $scope.pageTitle = $state.$current.data.pageTitle;	
    $scope.videos = [];
    
    YoutubeFactory.getChannelVideos({
      type: 'video',
      maxResults: '5',
      part: 'id,snippet',
      order: 'date',
      channelId: $state.$current.data.channelId,
    }).success(function (response) {
      angular.forEach(response.items, function(child) {
        $scope.videos.push(child);
      });
      $ionicLoading.hide();
    });
});