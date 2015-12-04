ANGULAR NOTES

Research $resource

--------FROM PAISLEE.IO--------

AngularJS does three things:

1. Extends HTML to enable dynamic views. (Angular calls these extensions directives.)
2. Exposes a JavaScript API for specifying Angular apps.
3. Runs a data-binding engine on behalf of Angular apps.

MODULE
The highest level Angular object. Modules are how Angular packages its code and how
they want you to package yours. An Angular app as specied by the ng-app directive
always corresponds to a module. The following objects are always created as children
of modules.

CONFIG/ROUTES
An object that configures an Angular app. Basically a container for app setup. Within
config it is typical to see routes configured. Routing is a big part of single page
apps: because we are managing "pages" in the browser now, we specify a mapping of
URLs to states. With Angular this looks like pairing a view with a controller.

CONTROLLER
Probably most important kind of object in Angular back-end. Manages a special object
called a scope that is accessible by the portion of HTML that knows about that controller.
Gateway between the info the front-end sees and the logic that creates and works on
that information.

DIRECTIVE
Angular ships with many but you should be writing your own with the directive object.
Any time you find yourself repeating chunks of HTML, or referring to DOM nodes in
JavaScript code, create a directive to encapsulate your output.

FACTORY/SERVICE/PROVIDER/VALUE
In Angular apps, data processing should happen in your Factories, Services, and Providers.
Each is an Angular construct that wraps a different JavaScript approach to creating objects.
Values also manage with data, but only constants that your app might need to know about.

FILTERS
Let you package the transformation of data in a way that is usable using the | syntax.
For example, the date filter takes a number and outputs a date. You can write your own filters.

            MODULE
              |
            CONFIG
              |
            ROUTES
          /        \
         /          \
   <view> <-$scope-> CONTROLLER
                          |
              FACTORY, SERVICE, PROVIDER

SPA
Single Page application

MVC
Model View Controller

---------FROM CODECADEMY---------

AngularJS is a framework for building dynamic web apps.

1. A user visits the AngularJS app.
2. The 'view' presents the apps data through the use of 'expressions', 'filters', and 'directives'.
Directives bind new behavior to HTML elements.
3. A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
4. The function in the 'controller' updates the state of the data.
5. The view automatically changes and displays the updated data. The page doesnt need to reload at any point.

MODULE
A module contains the different components of an AngularJS app.

CONTROLLER
Manages the apps data.

EXPRESSIONS
Displays values on the page.

FILTER
Formats the value of an expression.

DIRECTIVES
Directives bind behavior to HTML elements. When the app runs, AngularJS walks through
each HTML element looking for directives. When it finds one, AngularJS triggers that
behavior (like attaching a scope or looping through an array).

Examples of directives: ng-app, ng-controller, ng-repeat, ng-src, ng-click

------v from that weird french websit v-------

AngularJS is an MVC framework. Defines application with modules. Enhances HTML by
attaching directives to your pages. Encapsulates the behavior of your of your application
in controllers which are instanciated thanks to dependency injection. Eases structuring
and testing of JavaScript code. Makes factorizing of utility code easy.

EXPRESSIONS

AngularJS allows you to execute expressions directly within your html. Expressions
are used for small operations.

<div>1 + 1 = {{1+1}}</div>

DIRECTIVES

One of the most powerful features of AngularJS. Allow you to extend HTML to answer
the needs of web applications. Let you specify how your page should be structured
for the data available in a given scope.

AngularJS comes with several directives that let you build your basic application.
The first you will use most often is "ng-repeat". This directive lets angular create
a new set of elements in the DOM for each element in a collection.

Directive "ng-show" lets you specify whether or not an element should be shown.
This directive uses an expression which returns a Boolean to determine if the element
should be shown or not. The unshown elements are computed, but set to "display = none".

"ng-switch"

DATA BINDING

Angular not only lets you structure your views with directives, it also gives you
the ability to define the binding between the data in your scope and the content
of your views.

"ng-model"

Result is directly binded to the value of the description. If you change the content,
the description of the object in the scope is modified and updated in real time.

FILTERS

The filter mechanism allows you to change the way your data are displayed on the
page.

{{user.name | uppercase}}

You can also easily create your own filters.

PARTIAL VIEWS

You can bind part of your application to a specific AngularJS module with the directive
"ng-app". You can bind the whole page to a single AngularJS module if you want.
After that, you can use the directive "ng-view" to use partial views.

Your module will tell AngularJS which view should be displayed in the "ng-view" element.
This directive also lets you separate the content of your application in dedicated
files.

MODULES

In AngularJS, applications are structured in modules. A module can depend on other
modules, and a module can contain controllers, services, directives, and filters.

var angularJSApp = angular.module('AngularJSApp', []);

The empty array is where you declare the modules needed by your module.
