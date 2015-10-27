ANGULARJS LECTURE

Dependency: for this code to work, were going to need this other code.

DOM: Document Object Model.

MVC: Model View Controller. MVC is a design pattern.
Model is a representation of something else. Making a model is the first step in
any serious coding project. Model is representation and organization
of data. View is the parts of your code that make something you can see. HTML/CSS,
JavaScript, jQuery. Controller isnt a verb, but implies action. The controller gets
the data from the model and organizes it the way the view needs it. Middleman between
view and model. Its the glue.

Separation of concerns. The fewer things a piece of code is responsible for the
better. Small pieces.

          MODULE
            |
          CONFIG
            |
          ROUTES
       /          \
  VIEW  <-scope->  CONTROLLER
  |                       |
DIRECTIVE               FACTORY

ng-app : attribute of your html tag
ng-controller : attribute of your body tag. does the linking between controller and view.
$scope : IS the link between the controller and the view
ng-model : sets up two-way data-binding.
{{}} : one-way data-binding. talking about a property on the $scope, but you cant change it.
ng-repeat : make an element, repeats all of the properties on that element (object or array)
filters: applied to an ng-repeat to cut down which results are shown
ng-show and ng-hide : checks for truthiness of a value, toggles display none (css)
ng-if : checks truthiness, doesnt put it in the DOM, can save some memory b/c doesnt load
ng-click : primary use case is as an attribute of a button, give it an expression,
which is one line of JavaScript it will run, like a function.
