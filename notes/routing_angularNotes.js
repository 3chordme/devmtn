ROUTING

in app.js add 'ui.router' module to the app inside [].

//app.js
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { //when the state = 'home', use this object.
      url: '/', //specifies what comes after the hash
      template: '<div>Something goes here. {{something from scope}}</div>', //inline html works
      controller: 'ctrl', //now you can make stuff on scope in controller
    })
    .state('settings', {
      url: '/settings',
      controller: 'settingsController', //a new controller
      templateUrl: 'settings-tmpl.html' //or you can just link to an html file
    });
});

//controller.js
inject $scope and $state.
you can also inject $rootScope (unexplained).

//settingsController.js
all we are injecting in this one is $scope.

//settings-tmpl.html
<div> {{ can access settingsController scope }} </div>

//index.html

add the script for angular ui-router, add your app to the html tag, dont need to add
the controller to the body.
add the script for settings-controller too.

<body>
  <a href="/#/">INDEX HTML</a> //href hypertext reference
  <a sref="settings"</a> //state ref goes to state by name
  //things outside of the ui view don't go away

  <ui-view></ui-view> //directive found by ui-router
</body>

This way if you have a header and footer, the ui-view can change and the result
of the page wont reload/refresh. Gives you SPA (single page application) experience.
# tells browser not to reload the whole page.

You can use ng-animate to make these changes animate all cool like.

Routes are based off of states. State is how something is at any given moment.

Master detail pattern.
