angular.module('rtfmApp')
  .service('threadService', function(fb){

    this.getComments = function(threadId){
      return new Firebase(fb.url + '/threads/' + threadId + '/comments');
    };

    this.getThread = function(threadId){
      console.log("Hello");
      return new Firebase(fb.url + '/threads/' + threadId);
    };

    this.getThreads = function(){
      return new Firebase(fb.url + '/threads');
    };


  })
