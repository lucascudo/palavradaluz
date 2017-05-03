function VideoCtrl() {
    
}

angular.module('starter.controllers', [])

.controller('TextCtrl', function ($ionicLoading, $rootScope, $scope, ionicMaterialInk, ionicMaterialMotion, BookFactory) {
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
    $ionicLoading.show();
    $scope.ebooks = BookFactory.getEbooks();
    $ionicLoading.hide();
})
.controller('MessageCtrl', function ($ionicLoading, $scope, ionicMaterialInk, ionicMaterialMotion, MessageFactory) {
  $scope.refreshPage = function refreshPage() {
    var mfCopy = MessageFactory.slice();
    $scope.message = mfCopy.sort(function randomize() {
      return (Math.round(Math.random())-0.5);
    }).pop();
    console.log($scope.message);
  };
  ionicMaterialInk.displayEffect();
  ionicMaterialMotion.ripple();
  $ionicLoading.show();
  $scope.refreshPage();
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