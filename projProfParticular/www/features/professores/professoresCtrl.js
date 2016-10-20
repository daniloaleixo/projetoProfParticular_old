
appProf
.controller('ProfessoresCtrl', ['$scope', '$stateParams', 'FIREBASE_CONFIG',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FIREBASE_CONFIG) {
	professoresCtrl = this;

	console.log("ProfessoresCtrl | estou aqui");

	var database = firebase.database();
	professoresCtrl.professores = new Array();
	professoresCtrl.errorMessage = '';

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