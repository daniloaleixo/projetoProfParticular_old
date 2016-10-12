angular.module('app.controllers', [])
.controller('LoginCtrl', ['$scope', '$stateParams', '$ionicLoading', '$location',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $location) {
	var loginCtrl = this;

	loginCtrl.user = {
		email: '',
		password: '',
		password2: ''
	};
	loginCtrl.signingUp = false;
	loginCtrl.error = '';

	var showLoading = function(){
		$ionicLoading.show({
			template: '<ion-spinner icon="spiral"></ion-spinner>',
			noBackdrop: true
		});
	}

	var hideLoading = function(){
		$ionicLoading.hide();
	}


	//console.log("Estou no controller");

	loginCtrl.login = function(){
		loginCtrl.error = '';

		//A senha do firebase deve ser maior que 6 caracteres
		if(loginCtrl.user.password.length < 6 && loginCtrl.user.password.length != 0) {
			loginCtrl.error = "Sua senha deve ser maior que 6 caracteres";
			return ;
		}	

		//Se for pra registrar manda pra la
		if(loginCtrl.signingUp) loginCtrl.register();
		else {
			//console.log("Vou tentar fazer login");

			var trySignIn = firebase.auth().signInWithEmailAndPassword(loginCtrl.user.email, loginCtrl.user.password);

			showLoading();

			trySignIn.then(function(auth){
				//console.log("Estou logado como " + auth.email);
				hideLoading();
				$location.path('/home');
			}, function(error){
				loginCtrl.error = "Não foi possivel fazer o login, verifique o email e a senha";
				hideLoading();
			});
		}
	};

	loginCtrl.register = function(){
		//Compara as senhas
		if(loginCtrl.user.password == loginCtrl.user.password2){
			//console.log("Vou tentar me registrar");

			var tryRegister = firebase.auth().createUserWithEmailAndPassword(loginCtrl.user.email, loginCtrl.user.password);

			showLoading();

			tryRegister.then(function(user){
				//console.log("Consegui me registrar");
				hideLoading();
				loginCtrl.login();

			},function(error){
				loginCtrl.error = "Não foi possivel fazer o cadastro, verifique o email e a senha";
				hideLoading();
			})
		} else {
			loginCtrl.error = "As senhas não coincidem";
		}
	};

	loginCtrl.googleLogin = function(){
		console.log("Vou tentear fazer o login com o google");

		var provider = new firebase.auth.GoogleAuthProvider();

  		var tryGoogleSignIn = firebase.auth().signInWithPopup(provider);
  		showLoading();
  		tryGoogleSignIn.then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  console.log("User " + user);
		  hideLoading();
		  $location.path('/home');

		}).catch(function(error){
					  // Handle Errors here.
		  var errorCode = error.code;
		  loginCtrl.error = error.message;
		  hideLoading();
		});
	};



}]);