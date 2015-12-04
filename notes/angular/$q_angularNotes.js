Review: how does app interact with API?

$http is a (core angular) service, $http is injected into the service (service.js),
then service is injected into the controller, service gets data for controller,
.then promise so you have it, put it on $scope, view can access
service can tweak the data then give it back to controller.

you can say $http.get('url') / $http.put('url', data)
OR
$http {
  method: 'GET',
  url: 'url'
}
/
$http {
  method: 'PUT',
  url: 'url',
  data: 'dataGoesHere'
}

Promises

Normal flow is one line at a time. Synchronous.
Promise is tied to a second flow of code. Promise object manages second flow.
Usually returns result.data.

JavaScript is a single-threaded application. Line by line, one at a time. It fakes
asynchronous behavior by constantly looking at a loop, checking for any new input,
following through with the current process, and it has a list of things it needs to check on.

$q


is a service with methods .defer() //how you make a promise
.resolve() //how you start resolving the promise which will start invoking the chain of .then functions.
            //aka "I'm done and it worked" -$q

pseudo code (not real syntax, just real logic)

getMeThings()

function getMeThings() {
  var promise = $q.defer();
  function callback() {
    promise.resolve(['thing1', 'thing2']);
  }
  ActuallyDoThingToGetThings(callback);
  return promise;
}

actual code:

app.factory('ConfigService', function($http){
  var config;

  if(config) {
    promise.resolve(config);
  } else {
    $http.get('url')
  }

DAMMIT HE GOT AHEAD
  return promise;
})



.defer() creates a Deferred object which has methods
.resolve() - data from resolve is sent to .success -
and
.reject() - data from reject is sent to error -
and has a Promise object on it called promise
which has a method called .then()

cross origin policy error.
instead of get use json p
basically server didnt do their job.

Server status codes

100-199
200-299 good
300-399
400-499 client error
500-599 server error

Two ways to handle promises:

.success
.error

OR

.then(successFunction, errorFunction)
