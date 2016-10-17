appProf
.controller('ProfileCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {
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

	if(user != null){
		console.log("ProfileCtrl| Menu: displayName: " + user.displayName);
		console.log("ProfileCtrl| Menu: photoURL: " + user.photoURL);
		profileCtrl.user.displayName = user.displayName || user.email;
		profileCtrl.user.photoURL = user.photoURL || 'img/login-bkg.jpg';
		profileCtrl.user.email = user.email || '';

		console.log("ProfileCtrl| ProfileCtrl: displayName: " + profileCtrl.user.displayName);
		console.log("ProfileCtrl| ProfileCtrl: photoURL: " + profileCtrl.user.photoURL);

	}

	profileCtrl.changeDisplayName = function(){
		console.log("Estou aqui");
		if(profileCtrl.newUserInfos.displayName != '' && user != null){
			user.updateProfile({
				displayName: profileCtrl.newUserInfos.displayName
			}).then(function(){
				console.log("ProfileCtrl |Display Name foi atualizado com sucesso!");
				//user.$save();
				$location.path('/home');
			}, function(error){
				console.log("ProfileCtrl |Erro ao atualizar Display Name");
			});
		}
	};


}])