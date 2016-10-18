appProf
.controller('ProfileCtrl', ['$scope', '$stateParams', '$location', '$ionicLoading', 'UserInfos', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location, $ionicLoading, UserInfos) {
	var profileCtrl = this;

	profileCtrl.user = {
		displayName: '',
		photoURL: '',
		email: ''
	};

	console.log("ProfileCtrl | Vou imprimir do service" + UserInfos.getDisplayName());

	profileCtrl.newUserInfos = {
		displayName: '',
		photoURL: '',
		email: ''
	};

	var showLoading = function(){
		$ionicLoading.show({
			template: 'Atualizando...',
			noBackdrop: true
		});
	}

	var hideLoading = function(){
		$ionicLoading.hide();
	}


	profileCtrl.updateVariables = function(){
		if(user != null){
			profileCtrl.user = UserInfos.getUserInfos();
		}
	}

	profileCtrl.updateVariables();

	profileCtrl.changeDisplayName = function(){
		console.log("ProfileCtrl| changeDisplayName - > Estou aqui");
		if(profileCtrl.newUserInfos.displayName != '' && user != null){
			showLoading();
			user.updateProfile({
				displayName: profileCtrl.newUserInfos.displayName
			}).then(function(){
				console.log("ProfileCtrl |Display Name foi atualizado com sucesso!");
				profileCtrl.newUserInfos.displayName = '';
				profileCtrl.updateVariables();
				hideLoading();
			}, function(error){
				console.log("ProfileCtrl |Erro ao atualizar Display Name");
				profileCtrl.updateVariables();
				hideLoading();
			});
		}
	};


}])