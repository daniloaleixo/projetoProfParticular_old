angular.module('app.controllers', [])
.controller('LoginCtrl', ['$scope', '$stateParams',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading) {
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
		loginCtrl.error = '';

		//A senha do firebase deve ser maior que 6 caracteres
		if(loginCtrl.user.password.length < 6) {
			loginCtrl.error = "Sua senha deve ser maior que 6 caracteres";
			return ;
		}	


		if(loginCtrl.signingUp) loginCtrl.register();
		else {
			console.log("Vou tentar fazer login");

			firebase.auth().signInWithEmailAndPassword(loginCtrl.user.email, loginCtrl.user.password)
			.then(function(auth){
				console.log("Estou logado como " + auth.email);
			}, function(error){
				loginCtrl.error = "Não foi possivel fazer o login, verifique o email e a senha";
			});
		}
	};

	loginCtrl.register = function(){
		//Compara as senhas
		if(loginCtrl.user.password == loginCtrl.user.password2){
			console.log("Vou tentar me registrar");
			firebase.auth().createUserWithEmailAndPassword(loginCtrl.user.email, loginCtrl.user.password)
			.then(function(user){
				console.log("Consegui me registrar");
			},function(error){
				loginCtrl.error = "Não foi possivel fazer o cadastro, verifique o email e a senha";
			})
		} else {
			loginCtrl.error = "As senhas não coincidem";
		}
	};



}]);