angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  $stateProvider
    
  

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl as homeCtrl',
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory
          'currentAuth': ['Auth', function(Auth){
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return Auth.$waitForSignIn().then(function(auth){ firebaseUser = auth; });
          }]
        }
      }
    }
  })

  .state('menu.professores', {
    url: '/professores',
    views: {
      'side-menu21': {
        templateUrl: 'templates/professores.html',
        controller: 'professoresCtrl',
        resolve: {
          // controller will not be loaded until $requireSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function(Auth) {
            // $requireSignIn returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireSignIn();
          }]
        }
      }
    }
  })

  .state('menu.historico', {
    url: '/historico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historico.html',
        controller: 'historicoCtrl',
        resolve: {
          // controller will not be loaded until $requireSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function(Auth) {
            // $requireSignIn returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireSignIn();
          }]
        }
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'features/menu/menu.html',
    controller: 'MenuCtrl as menuCtrl',
    resolve: {
      // controller will not be loaded until $requireSignIn resolves
      // Auth refers to our $firebaseAuth wrapper in the factory below
      "currentAuth": ["Auth", function(Auth) {
        // $requireSignIn returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
        return Auth.$requireSignIn();
      }]
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'features/login/login.html',
    controller: 'LoginCtrl as loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});