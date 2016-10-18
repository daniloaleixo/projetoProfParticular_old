angular.module('app.services', [])

.factory('UserInfos',
	function(){
		var servUser = {
			displayName: '',
			email: ''
		};

		var updateUser = function(){
			servUser.displayName = user.displayName;
		}

		return {
			getDisplayName: function(){
				updateUser();
				return servUser.displayName;
			}
		}
})