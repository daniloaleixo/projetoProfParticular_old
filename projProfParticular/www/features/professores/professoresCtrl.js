
appProf
.controller('ProfessoresCtrl', ['$scope', '$stateParams', 'FIREBASE_CONFIG',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FIREBASE_CONFIG) {
	professoresCtrl = this;

	var database = firebase.database();
	professoresCtrl.professores = new Array();

	professoresCtrl.atualizaListaProfessores = function(){
		database.ref('/professores/').once('value').then(function(snapshot){
			console.log("ProfessoresCtrl| consegui um snapshot");
			snapshot.val().forEach(function(professor){
				console.log(professor);
				if(professor) professoresCtrl.professores.push(professor);
			})
		});	
	}

	professoresCtrl.atualizaListaProfessores();

	

	// console.log("vaiiii");
	// console.log(professoresCtrl.professores);

	//console.log("ProfessoresCtrl| estou aqui");
	//console.log("ProfessoresCtrl| " + database);


}])