
appProf
.controller('ProfessoresCtrl', ['$scope', '$stateParams', 'FIREBASE_CONFIG','ratingConfig', '$ionicLoading',
  // The following is the constructor function for this page's controller. 
  //See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FIREBASE_CONFIG, ratingConfig, $ionicLoading) {
	professoresCtrl = this;

	console.log("ProfessoresCtrl | estou aqui");

	var database = firebase.database();
	professoresCtrl.professores = new Array();
	professoresCtrl.errorMessage = '';

	// set the rate and max variables
	professoresCtrl.rating = {
		'max': 5,
		'readOnly': true
	}

	var showLoading = function(){
		$ionicLoading.show({
			template: '<ion-spinner icon="spiral"></ion-spinner>',
			noBackdrop: true
		});
	}

	var hideLoading = function(){
		$ionicLoading.hide();
	}

	professoresCtrl.professores = [
		{
			"UID": "8B1eYE4JZ8MYTpVjYBZFlhGJBO52",
			"displayName":"Danilo Aleixo",
			"photoURL":"img/login-bkg.jpg",
			"materias":{
				"resumo":["matematica", "fisica"],
				"fundamental":["matematica", "fisica"],
				"medio":["matematica", "fisica"],
				"superior":[]
			},
			"avaliacoes":{
				"quantidade": 0,
				"didatica":5,
				"conhecimento":5,
				"simpatia":5
			},
			"localizacoes":{
				"principal": {
					"logradouro": "Rua xyz, 180",
					"cidade": "São Paulo ",
					"estado":"SP",
					"CEP": "05454555"
				},
				"secundararias" : []
			},
			"curriculo": {
				"sobre":"Dou aulas particulares há 5 anos e ja fiz isso e isso e isso, sempre estou presente na vida da galera e quero um texto longo",
				"formacao":{
					"graduacao":{
						"instituicao": "USP",
						"status":"Cursando",
						"curso":"Ciencia da Computacao"
					},
					"posGraduacoes":[]
				}
			}
		},
		{
			"UID": "8B1eYE4JZ8MYTpVjYBZFlhGJBO52",
			"displayName":"Ronaldo",
			"photoURL":"img/login-bkg.jpg",
			"materias":{
				"resumo":["matematica", "fisica"],
				"fundamental":["matematica", "fisica"],
				"medio":["matematica", "fisica"],
				"superior":[]
			},
			"avaliacoes":{
				"quantidade": 0,
				"didatica":3.5,
				"conhecimento":5,
				"simpatia":5
			},
			"localizacoes":{
				"principal": {
					"logradouro": "Rua xyz, 180",
					"cidade": "Campinas",
					"estado":"SP",
					"CEP": "05454555"
				},
				"secundararias" : []
			},
			"curriculo": {
				"sobre":"Sou muito legal",
				"formacao":{
					"graduacao":{
						"instituicao": "USP",
						"status":"Cursando",
						"curso":"História"
					},
					"posGraduacoes":[]
				}
			}
		}
	]

	professoresCtrl.atualizaListaProfessores = function(){
		showLoading();
		database.ref('/professores/').once('value').then(function(snapshot){
			console.log("ProfessoresCtrl| consegui um snapshot");
			snapshot.val().forEach(function(professor){
				console.log(professor);
				if(professor) professoresCtrl.professores.push(professor);
			})
			hideLoading();

			if(professoresCtrl.professores.length == 0) 
				professoresCtrl.errorMessage = 'Desculpe não consegui encontrar nenhum professor'
			else 
				professoresCtrl.errorMessage = '';

		}, function(error){
			professoresCtrl.errorMessage = error;
			console.log(error);
			hideLoading();
		});	
	}

	professoresCtrl.atualizaListaProfessores();

	console.log("ProfessoresCtrl | peguei os professores");
	console.log(professoresCtrl.professores);


	

	// console.log("vaiiii");
	// console.log(professoresCtrl.professores);

	//console.log("ProfessoresCtrl| estou aqui");
	//console.log("ProfessoresCtrl| " + database);


}])