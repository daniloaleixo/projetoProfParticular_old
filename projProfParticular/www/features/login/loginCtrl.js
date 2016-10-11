angular.module('app.controllers', [])
.controller('LoginCtrl', ['$scope', '$stateParams', 
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var loginCtrl = this;

	loginCtrl.user = {
		email: '',
		password: '',
		password2: ''
	};
	loginCtrl.signingUp = false;
	loginCtrl.error = '';


	//console.log("Estou no controller");

	loginCtrl.login = function(){
		if(loginCtrl.signingUp) loginCtrl.register();
		else {
			console.log("Vou tentar fazer login");
		}
	};

	loginCtrl.register = function(){
		console.log("Vou tentar me registrar");
	};



}]);