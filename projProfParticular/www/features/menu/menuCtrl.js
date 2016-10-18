
//NAO MUDAR PARA appProf SE NAO DA ERRO
angular.module('app.controllers', [])
.controller('MenuCtrl', ['$scope', '$stateParams', '$location', 'UserInfos',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location, UserInfos, currentAuth) {
	var menuCtrl = this;

	console.log("MenuCtrl| estou aqui");
	console.log(currentAuth);

	menuCtrl.user = {
		displayName: '',
		photoURL: '',
		email: ''
	};

	menuCtrl.updateVariables = function(){
		if(user != null){
			menuCtrl.user = UserInfos.getUserInfos();
		}
	}

	menuCtrl.updateVariables();

	menuCtrl.logout = function(){
		firebase.auth().signOut().then(function() {
		  	console.log('MenuCtrl| Signed Out');
		  	user = null;
		  	$location.path('/login');
		  	menuCtrl.user.displayName = null;
			menuCtrl.user.photoURL = null;
			menuCtrl.user.email = null;
		  	return ;
		}, function(error) {
		  	console.error('MenuCtrl| Sign Out Error', error);
		});
		//console.log("logout");
	}

}])