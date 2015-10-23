JQUERY

Its a library that JavaScript uses to reduce the amount of code you have to write.

Created when CSS was getting popular, JavaScript and CSS had a baby and it was Jquery.

To easily make and find things in JavaScript.

When you do this you are manipulating the DOM.

DOM = Document Object Model. You are editing an html document. Set up as a staging area.

api.jquery.com

^use any time you need to write or reference jquery

$ means youre doing jquery.

$() means you are using a jquery selector.

$("body") find the body.

$(".myList") find myList class.

$("#myList") find myList id.

$("#myList > li") all li in myList id.

var elements = $("#myList > li")

gives you a jquery Object

code.jquery.com > jquery 2x?

(first css link)
link jquery
then link your jquery code

in the html head so that your styles load first then all of jquery then your jquery file

load up to 6 at a time (what?)

var color = $("body").css("background-color"); assigns the background-color of body to var color

note: you can debug one line at a time in sources in your dev tools in browser

if you arent sure what to do in jquery, do it first in html/css. get it to look right. then chop it up with jquery.

.prepend() add before

.append() same thing opposite order - add after

body.append("<div>" + i + "</div>")

.remove() remove an attribute from each element.

everything in jquery is manipulating the DOM.

$(".middle").remove()

Doesnt effect the html document, just effects what is displayed.

.on() "on" indicates an event. attach to something.

Events: when something happens. Click, hover, on mouse enter, on mouse leave, key down, etc.
onload, onclick, onmouseover, onfocus, onblur (on is not an event, what follows on is)
onfocus - when a user puts the cursor in a form field
onblur - when a user leaves a form field

body.on('click', function(){
  $(".middle").remove();
})

^when you click anywhere in the body, whatever has the class "middle" will be removed from the DOM.

.val() - gets the current value inside the tags that you found

body.append("<div>Value of middle is : " + $(".middle").val + "</div>");

//displays Value of middle is: empty

value deals with input fields, the value the user has given that input field. as in of a select box, or a checkbox

.html() get the html contents of the first elements <-- dangerous??

.text() get the text inside the tags of your html

.find() goes all the way down the tree.
.children() finds direct children

.toggleClass() find an element, give one or more class names separated by commas, if it isnt there add it, if it is take it away
you can also add second parameter Boolean (optional) to say add (true) or remove (false)


in jquery you can chain things

body.find("li").append(blah blah blah).remove(blah blah) etc.
