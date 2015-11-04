angular.module('directivePractice').directive('dirDisplay', function() {

  return {
    templateUrl: 'app/dirDisplayTmpl.html',
    scope: {
      user: '=',
      setUser: '&'
    },
    link: function(scope, element, attributes) {
      //console.log(scope);
      //console.log(element);
      //console.log(attributes);
      scope.showToggle = "true";
      element.on('click', function() {
        scope.setUser(scope.user);
        scope.showToggle = !scope.showToggle;
        scope.$apply();
      });
    }
  };

});
