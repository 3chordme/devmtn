FIREBASE NOTES

@ChrisEsplin

calligraphy.org - all angular, firebase, and node.

Firebase is a datasource. Database. Real-time JSON data store. Originally built for
real time games. They realized that everyone needs their back end. Works really well
for anything with lots of connectivity that needs to sync in real time. Acquired by
Google, who is concerned with the ecosytem of the web, which means dev stuff is freeeee.

So far with angular we havent been able to store data. With firebase we can host,
authenticate, login, etc.

checkout firebase.com/docs or google angular fire docs

Firebase runs off of urls, when you make a ref its an instance of the firebase object.

For basic applications you may not need servers.

Load firebase in a script tag in your html.

Core firebase you can learn on your own. Only use in node, otherwise use angular fire.

Angular fire library gets loaded on top of your firebase library. (See quickstart for angular fire)

3 script tags. Angularjs, firebase, and angular fire.

Bring firebase into your angular module object inside [].

In your controller(s) inject $firebaseObject and $firebaseArray.

The data structuring is arbitrary, so its your responsibility to do it well.

Firebase doesnt use a 0-indexed array because if multiple users push data at the same
time, the ordered could get messed up. Well 99% of the time you dont use it. $firebaseArray
is the sort of equivalent. Use $add instead of push. Creates an alphanumeric key
based on timestamps. Sorts based on millisecond that it was added, plus a little
randomness.

Arrays are usually used for plurals (users, messages). Objects are usually used
for individuals (user, message).

When you create a new Firebase object, call it a ref.

You cant three way bind an array.

Firebase likes shallow data. Limit your nesting.

Example problem: Every user

Event loop (javascript) ridiculously fast. Digest loop (angular) fast.

AUTHORIZATIONS

$firebaseAuth

Javaascript web token

Inject $firebaseAuth service
