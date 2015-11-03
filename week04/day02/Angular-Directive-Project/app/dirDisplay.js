angular.module('directivePractice').directive('dirDisplay', function() {

  return {
    templateUrl: 'app/dirDisplayTmpl.html',
    link: function(scope, element, attributes) {
      //console.log(scope);
      //console.log(element);
      //console.log(attributes);
      scope.showToggle = "true";
      element.on('click', function() {
        scope.showToggle = !scope.showToggle;
        scope.$apply();
        console.log("Click happened and showToggle is " + scope.showToggle);
      });
    }
  };

});
