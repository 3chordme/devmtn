var app = angular.module('directivePractice', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '/app/homeTmpl.html',
      controller: 'homeCtrl'
    })



    $urlRouterProvider.otherwise('/home');






});
