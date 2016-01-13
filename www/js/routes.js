angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tour', {
      url: '/tour',
      templateUrl: 'templates/tour.html',
      controller: 'tourCtrl'
    })



    .state('item', {
      url: '/person',
      templateUrl: 'templates/person.html',
      controller: 'personCtrl'
    })



    .state('home', {
      url: '/pageHome/:itemId',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('myhome', {
      url: '/myHome',
      templateUrl: 'templates/myHome.html',
      controller: 'myCtrl'
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tour');

});
