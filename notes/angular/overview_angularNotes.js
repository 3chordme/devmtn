--------FROM ANGULARJS.ORG--------

*VOCAB*

TEMPLATE
HTML with additional markup.

DIRECTIVES
Extend HTML with custom attributes and elements.

MODEL
The data shown to the user in the view and with which the user interacts.

SCOPE
Context where the model is stored so that controllers, directives, and expressions
can access it.

EXPRESSIONS
Access variables and functions from the scope

COMPILER
Parses the template and instantiates directives and expressions.

FILTER
Formats the value of an expression for display to the user.

VIEW
What the user sees (the DOM).

DATA BINDING
Sync data between the model and the view.

CONTROLLER
The business logic behind views.

DEPENDENCY INJECTION
Creates and wires objects and functions.

INJECTOR
Dependency injection container.

MODULE
A container for the different parts of an app, including controllers, services,
filters, directives which configures the injector.

SERVICE
Reusable business logic independent of views.


*FIRST EXAMPLE: DATA BINDING*

index.html:

<div ng-app ng-init="qty=1;cost=2">
  <b>Invoice:</b>
  <div>
    Quantity: <input type="number" min="0" ng-model="qty">
  </div>
  <div>
    Costs: <input type="number" min="0" ng-model="cost">
  </div>
  <div>
    <b>Total:</b> {{qty * cost | currency}}
  </div>
</div>

This is html with some new markup. Its called a template. Angular parses and processes
the template using the compiler when it starts the application. The loaded, transformed,
and rendered DOM is then called the view.

The ng-app attribute is linked to a directive that automatically initializes our application.
Angular also defines a directive for the <input> element that adds extra behavior to the element.
The ng-model directive stores and updates the value of the input field into/from a variable.

In Angular, the only place where an application should access the DOM is within directives. This is important because artifacts that access the DOM are hard to test. If you need to access the DOM directly you should write a custom directive for this. The directives guide explains how to do this.

qty and cost are initialized as variables. they are given as the default to input.
if the user changes the input, they are assigned the new input as values.
Then they are multiplied and filtered by currency.
