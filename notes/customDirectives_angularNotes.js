Custom Directives

Allows you to reuse pieces.

Allows you to do things that angular cant.

Directive needs to always return an object.

Side-note: snake-case. html is case insensitive. Not used in js because - means minus.

Directives in js must be camel case. First letter lowercase.

Pascal case is camel case except first letter is capitalized. WHy? Pascal hates camels.

restrict: EA and/or C

Dont use C. E (Element) means <my-customer></my-customer> works.
A (attribute)

link(scope, element, attribute) {

return{
  link: link;
}
}
