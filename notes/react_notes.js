HOW TO BUILD (BETTER) USER INTERFACES WITH REACT

Tyler McGinnis

insidesales.com is about making similar apps that are familiar to users
in order to drive sales. Using predictive analytics.

gamification of sales task force, leaderboards, email tracking.

History of Building Web Apps

2005 - jQuery, MooTools. The ajax revolution.

2010 - Knockout, Backbone.js, Ember, AngularJS

AngularJS backed by large and possibly evil corporation.

Views/Templates-
Controllers-Give you scope object, any props put on scope usable in view.
Services-Heavy Lifters. Http request can be handled by server and injected into controller.
Directives-Basically reusable widgets.
"If you're debating on whether or not to use a directive."

Problem is directives are complicated, scope gets too crowded.

React will make you a better angular directive, if you want to stick with directives.

No DSL. KVO is bad. $scope (use directives). DOM needs an abstraction.

^Criticisms apply to angular 1.x, 2 is supposed to be better.

Good at angular means good at angular. Good at react means good at javascript.

React:

Manage State - states are the difference between websites and web applications.
Components (like directives) - You can nest components. Like all tweets could be one component,
and individual tweets could be components.
Unidirectional Data Flow - No two way data-binding, which means more code, but you
get to know when things change.
Virtual DOM -

Dependency injection isnt used in react.


React router.

React dev tools.

React-Redux: single state tree.

Good starter kit is react-redux-universal-hot-example from erikras. All the best modern practices
in one example.

React native.

$ react-native init demo

use xcode to run. for ios devs.

Isomorphic rendering.

Dan who wrote redux is doing egghead.io series.
