angular.module('starter.services', [])

.factory('BookFactory', function () {
    var ebooksUrl = "http://www.lucascudo.com.br/palavrasdaluz/";
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
.factory('MessageFactory', function () {
	return [
		{
			author: 'Humberto Gessinger',
			text:
				'Toda vez que falta luz.\n\
				Toda vez que algo nos falta.\n\
				O invisível nos salta aos olhos.\n\
				Um salto no escuro, da piscina.\n\
				\n\
				O fogo ilumina muito, por muito pouco tempo.\n\
				Em muito pouco tempo, o fogo apaga tudo, tudo um dia vira luz.\n\
				Toda vez que falta luz.\n\
				O invisível nos salta aos olhos.'
		},
		{
			author: 'Chico Xavier',
			text:
				'Cada pessoa é aquilo que crê; \n\
				fala do que gosta; \n\
				retém o que procura; \n\
				ensina o que aprende; \n\
				tem o que dá e vale o que faz.'
		}
	];
})
.factory('YoutubeFactory', function ($http) {
    return {
        getChannelVideos: function (youtubeParams) {
            youtubeParams.key = '';
            return $http.get('https://www.googleapis.com/youtube/v3/search', {params: youtubeParams});
        }   
    };
});