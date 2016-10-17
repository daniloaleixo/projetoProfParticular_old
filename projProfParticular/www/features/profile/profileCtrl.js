appProf
.controller('ProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var profileCtrl = this;

	profileCtrl.user = {
		displayName: '',
		photoURL: '',
		email: ''
	};

	profileCtrl.newUserInfos = {
		displayName: '',
		photoURL: '',
		email: ''
	};

	if(firebaseUser != null){
		console.log("ProfileCtrl| Menu: displayName: " + firebaseUser.displayName);
		console.log("ProfileCtrl| Menu: photoURL: " + firebaseUser.photoURL);
		profileCtrl.user.displayName = firebaseUser.displayName || firebaseUser.email;
		profileCtrl.user.photoURL = firebaseUser.photoURL || 'img/login-bkg.jpg';
		profileCtrl.user.email = firebaseUser.email || '';

		console.log("ProfileCtrl| ProfileCtrl: displayName: " + profileCtrl.user.displayName);
		console.log("ProfileCtrl| ProfileCtrl: photoURL: " + profileCtrl.user.photoURL);

	}

	profileCtrl.changeDisplayName = function(){
		console.log("Estou aqui");
		if(profileCtrl.newUserInfos.displayName != '' && firebaseUser != null){
			firebaseUser.updateProfile({
				displayName: profileCtrl.newUserInfos.displayName
			}).then(function(){
				console.log("ProfileCtrl |Display Name foi atualizado com sucesso!");
			}, function(error){
				console.log("ProfileCtrl |Erro ao atualizar Display Name");
			});
		}
	};


}])