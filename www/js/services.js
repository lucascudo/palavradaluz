angular.module('starter.services', [])

.factory('BooksFactory', function () {
    ebooksUrl = "http://www.sisau.com.br/espiritismoemebook/";
    return {
	    getEbooks: function () {
	    	return [
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
	    }
	}
})
.factory('YoutubeFactory', function ($http) {
    return {
        getChannelVideos: function (youtubeParams) {
            youtubeParams.key = 'AIzaSyDa2nNiaFBE-4xGAN5txtR03-T6FwuJGn8';
            return $http.get('https://www.googleapis.com/youtube/v3/search', {params: youtubeParams});
        }   
    };
});