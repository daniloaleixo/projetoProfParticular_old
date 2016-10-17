
//NAO MUDAR PARA appProf SE NAO DA ERRO
angular.module('app.controllers', [])
.controller('MenuCtrl', ['$scope', '$stateParams', '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location, currentAuth) {
	var menuCtrl = this;

	console.log("MenuCtrl| estou aqui");
	console.log(currentAuth);

	menuCtrl.user = {
		displayName: '',
		photoURL: '',
		email: ''
	};

	if(user != null){
		console.log("MenuCtrl| Menu: displayName: " + user.displayName);
		console.log("MenuCtrl| Menu: photoURL: " + user.photoURL);
		menuCtrl.user.displayName = user.displayName || user.email;
		menuCtrl.user.photoURL = user.photoURL || 'img/login-bkg.jpg';
		menuCtrl.user.email = user.email || '';

		console.log("MenuCtrl| MenuCtrl: displayName: " + menuCtrl.user.displayName);
		console.log("MenuCtrl| MenuCtrl: photoURL: " + menuCtrl.user.photoURL);

	}

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