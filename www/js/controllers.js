function VideoCtrl() {
    
}

angular.module('starter.controllers', [])

.controller('TextCtrl', function ($ionicLoading, $rootScope, $scope) {
    $ionicLoading.show();
    var ebooksUrl = "http://www.sisau.com.br/espiritismoemebook/";
    $scope.ebooks = [
        { 
            title: "Céu e o Inferno, O - Allan Kardec",
            url: ebooksUrl + "Allan Kardec/O Céu e o Inferno/O Céu e o Inferno.pdf"
        },
        { 
            title: "Missionários da Luz - Francisco Cândido Xavier (André Luiz)",
            url: ebooksUrl + "Francisco Cândido Xavier/André Luiz/Missionários da Luz/Missionários da Luz.pdf"
        },
        { 
            title: "Obreiros da Vida Eterna - Francisco Cândido Xavier (André Luiz)",
            url: ebooksUrl + "Francisco Cândido Xavier/André Luiz/Obreiros da Vida Eterna/Obreiros da Vida Eterna.pdf"
        },
        { 
            title: "Vida e Atos dos Apóstolos - Cairbar Schutel",
            url: ebooksUrl + "Cairbar Schutel/Vida e Atos dos Apóstolos/Vida e Atos dos Apóstolos.pdf"
        }
    ];
    $scope.message = {
        text: 'Ainda não possuímos mensagens personalizadas =(',
        author: 'ROCHA, Lucas T.'
    };
    $ionicLoading.hide();
})
.controller('VideoCtrl', function($ionicLoading, $http, $rootScope, $scope, $state, YoutubeFactory){
    $ionicLoading.show();
    $scope.pageTitle = $state.$current.data.pageTitle;	
    $scope.videos = [];
    
    YoutubeFactory.getChannelVideos({
      type: 'video',
      maxResults: '10',
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