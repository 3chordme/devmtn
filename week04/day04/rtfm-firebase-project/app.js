var app = angular.module('rtfmApp', ['ui.router', 'firebase']);

  app.constant('fb', {url: 'https://flickering-fire-715.firebaseio.com/'});

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('threads', {
        url: '/threads',
        templateUrl: 'threads/threadsTmpl.html',
        controller: 'threadsCtrl',
        resolve: {
          threadsRef: function(threadService) {
            return threadService.getThreads();
          }
        }
      })
      .state('thread', {
    url: '/threads/:threadId',
    templateUrl: 'thread/thread.html',
    controller: 'threadCtrl',
    resolve: {
        threadRef: function (threadService, $stateParams) {
            return threadService.getThread($stateParams.threadId);
        },
        commentsRef: function(threadService, $stateParams) {
          return threadService.getComments($stateParams.threadId);
        }
    }
});

    $urlRouterProvider.otherwise('/threads');


  });
