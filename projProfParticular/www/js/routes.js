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
          'currentAuth': ['Auth', function(Auth){
            return Auth.$waitForSignIn();
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
        controller: 'professoresCtrl'
      }
    }
  })

  .state('menu.historico', {
    url: '/historico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historico.html',
        controller: 'historicoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'features/menu/menu.html',
    controller: 'MenuCtrl as menuCtrl'
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