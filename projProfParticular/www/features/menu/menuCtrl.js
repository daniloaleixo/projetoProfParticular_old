
//NAO MUDAR PARA appProf SE NAO DA ERRO
angular.module('app.controllers', [])
.controller('MenuCtrl', ['$scope', '$stateParams', '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {
	var menuCtrl = this;

	console.log("Menu: displayName: " + firebaseUser.displayName);
	console.log("Menu: photoURL: " + firebaseUser.photoURL);

	menuCtrl.displayName = firebaseUser.displayName || firebaseUser.email;
	menuCtrl.photoURL = firebaseUser.photoURL || 'img/login-bkg.jpg';
	menuCtrl.email = firebaseUser.email;

	console.log("MenuCtrl: displayName: " + menuCtrl.displayName);
	console.log("MenuCtrl: photoURL: " + menuCtrl.photoURL);

	menuCtrl.logout = function(){
		firebase.auth().signOut().then(function() {
		  	console.log('Signed Out');
		  	firebaseUser = null;
		  	$location.path('/login');
		  	menuCtrl.displayName = null;
			menuCtrl.photoURL = null;
			menuCtrl.email = null;
		  	return ;
		}, function(error) {
		  	console.error('Sign Out Error', error);
		});
		//console.log("logout");
	}

}])