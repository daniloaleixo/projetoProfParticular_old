
appProf
.controller('ProfessoresCtrl', ['$scope', '$stateParams', 'FIREBASE_CONFIG','ratingConfig',
  // The following is the constructor function for this page's controller. 
  //See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FIREBASE_CONFIG, ratingConfig) {
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

	professoresCtrl.professores = [
		{
			"UID": "8B1eYE4JZ8MYTpVjYBZFlhGJBO52",
			"displayName":"Danilo Aleixo",
			"photoURL":"img/login-bkg.jpg",
			"materias":{
				"fundamental":["matematica", "fisica"],
				"medio":["matematica", "fisica"],
				"superior":[]
			},
			"avaliacoes":{
				"quantidade": 0,
				"didatica":5,
				"conhecimento":5,
				"simpatia":5
			}
		},
		{
			"UID": "8B1eYE4JZ8MYTpVjYBZFlhGJBO52",
			"displayName":"Ronaldo",
			"photoURL":"img/login-bkg.jpg",
			"materias":{
				"fundamental":["matematica", "fisica"],
				"medio":["matematica", "fisica"],
				"superior":[]
			},
			"avaliacoes":{
				"quantidade": 0,
				"didatica":3.5,
				"conhecimento":5,
				"simpatia":5
			}
		}
	]

	professoresCtrl.atualizaListaProfessores = function(){
		console.log("adsaad");
		database.ref('/professores/').once('value').then(function(snapshot){
			console.log("ProfessoresCtrl| consegui um snapshot");
			snapshot.val().forEach(function(professor){
				console.log(professor);
				if(professor) professoresCtrl.professores.push(professor);
			})
		}, function(error){
			professoresCtrl.errorMessage = error;
			console.log(error);
		});	

		if(professoresCtrl.professores.length == 0) 
			professoresCtrl.errorMessage = 'Desculpe não consegui encontrar nenhum professor'
	}

	professoresCtrl.atualizaListaProfessores();
	console.log("ProfessoresCtrl | peguei os professores");
	console.log(professoresCtrl.professores);


	

	// console.log("vaiiii");
	// console.log(professoresCtrl.professores);

	//console.log("ProfessoresCtrl| estou aqui");
	//console.log("ProfessoresCtrl| " + database);


}])