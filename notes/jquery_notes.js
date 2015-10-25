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


FROM CODECADEMY - JQUERY Events

almost always look like this:

$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});

where "thing to touch" is the HTML element you will click on, hover over, or otherwise interact with, and "thing to affect" is the HTML element that fades away, changes size, or undergoes some other transformation.

Sometimes these elements are one and the same—you might hover over a <div> to change its opacity. Other times, you might interact with a separate element; for example, you might click on a button to resize a <div>.

Sometimes if you want an effect to occur right away, without an event like .click() or .hover(), you will skip the second line in the above:

$(document).ready(function() {
    $('thingToAffect').effect();
});

//what is this doing?

<body>
        <form>
        MESSAGE: <input type="text" name="message" value="Type your text here!">
        </form>
        <button>Add!</button><br/>
        <div id="messages"></div>
	</body>

$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});

//what is input[name=message]
.hover()

$('div').hover(function(){
        $(this).addClass('red');
    });

OR
The hover effect is able to take two functions, separated by a (very important) comma.

$('div').hover(
    function(){
      $(this).addClass('highlight');
   },
   function(){
      $(this).removeClass('highlight');
   }
);

The first function is called when we first mouse over the target, the second function
is called when our mouse leaves the object. The second function doesnt have to be
the opposite of the first, but it is very common.

.focus() - an element has focus when we click on it or tab over to it. An example of
focus would be a text box lighting up when you are filling it out in a form. It only
works on elements that can receive focus. The list is a bit vague, but <input> and
<textarea> are the usual suspects.

.keydown() - only works on whatever page element has focus.

$(document).ready(function(){
    $(this).keydown(function(){
        $('div').animate({left:'+=10px'},500);

    });
});

.animate() - the animate effect takes two inputs: the animation to perform, and the time in which to perform the animation.

$(document).ready(function() {
   $('div').animate({left:'+=10px'},500);
});

.fadeOut('speed', amount) - amount and speed are both optional?

$(document).ready(function() {
    $('div').on('click', function() {
      $('div').fadeOut('fast');
    });
});

.selectable() -

.dblclick()


MOVING MARIO

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				// Put our code here
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
			    $('img').animate({left: "+=10px"}, 'fast')
				// Put our code here
				break;
			// Down Arrow Pressed
			case 40:
				// Put our code here
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});

.sortable()

.selectable()

.accordion() expanding dropdown menu. reveals contents of the divs.?

$(document).ready(function(){
    $('#menu').accordion();
});

//along with html

<div id="menu">
    <h3>Section 1</h3>
    <div>
        <p>Im the first section!</p>
    </div>
    <h3>Section 2</h3>
    <div>
        <p>Im the second section!</p>
    </div>
    <h3>Section 3</h3>
    <div>
        <p>Im the third section!</p>
    </div>
</div>

//makes section 1 2 and 3 visible, but <p>s are only visible when <h3>s are clicked
