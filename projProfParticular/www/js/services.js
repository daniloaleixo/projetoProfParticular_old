angular.module('app.services', [])

.factory('Auth', ['$firebaseAuth',
	function($firebaseAuth){
		return $firebaseAuth();
}])

.factory('UserInfos',
	function(){
		var servUser = {
			displayName: '',
			email: '',
			photoURL: ''
		};

		var updateUser = function(){
			servUser.displayName = user.displayName || user.email;
			servUser.photoURL = user.photoURL || 'img/login-bkg.jpg';
			servUser.email = user.email || '';
		}

		return {
			getDisplayName: function(){
				updateUser();
				return servUser.displayName;
			},
			getPhotoURL: function(){
				updateUser();
				return servUser.photoURL;
			},
			getEmail: function(){
				updateUser();
				return servUser.email;
			},
			getUserInfos: function(){
				updateUser();
				return {
					displayName: servUser.displayName ,
					email: servUser.email,
					photoURL: servUser.photoURL
				}
			}
		}
})