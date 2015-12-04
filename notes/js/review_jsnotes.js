REVIEW JS NOTES

Think of variable as boxes. When you declare a variable, you label the box.

var shirt = {
  color : red //he puts a space between prop and value
};

When you say "if (shirt)" you are talking about the thing inside the box, not the
label.

My instructor just said. "Wait, is shirt a word? Am I making up words? Oh yeah, it's that thing you wear!"

An array is a box with dividers in it.

In HTML you MUST use double quotes. JavaScript doesnt care. JSON needs to be double quotes.

shirt.color = "blue" //same shirt, magically dyed a different color

shirt = {            //this is an entirely different object
  color : "green",
  style : "spandex",
  size : "x-small"
}                     //it loses all of its old properties and gains new ones

Adding properties using dot notation is called dot typing. Sounds like duct taping.
Youre taping new properties onto the object.

shirt.logo = "nike"; //dot notation
shirt["logo"] = "nike"; //bracket notation

Now our object has a "nike" logo taped onto it.

Getters get the value, Setters set the value. Setters have a single equals sign.

LOOPS

Types: while, do while, for, forEach

declare iterator/tracker aka counter, set condition, increment iterator

var done = false;

for (var i = 0; !done; i++) {
  //something
  done = true;
}

var kittens = [
  '',
  '',
  'black',
  'orange',
  '',
  'black and white'
]

for (var i = 0; i < kittens.length: i++) {
  var kitten = kittens[i];

  if (kittens[i] !== '') {
    console.log(kitten)
  }
}

Be more verbose and specific. Specify variables in a for loop. You dont have to,
but its helpful.

var k = 0;
while (k < kittens.length) {
  var kitten = kittens[k];

  if (kitten !== '') {
    console.log(kitten)
  }
  k++;
}

FOR EACH LOOPS

function kittenChecker(kitten) //parentheses look like a button. if you want your function to execute, push the button.
  if(kitten !== '') {
    console.log('For each: ' + kitten);
  }

kittens.forEach(kittenChecker); // loops through the array checking for kitten !== ''
//forEach is a method on an array. one of many prototype methods.

USING FOR LOOPS ON ARRAYS

for (var prop in kittens) {
  //in here, prop is the property of kittens
  //and kittens[prop] is the value of that property
}


Hard Drive - Storage. Magnetic disks and spinning needles (ie 5400 rpm) used for storage. Doesnt need electricity.
CPU - Brain. 3.2 gigahurtz does 32 billion computations per minute.

Since CPU is way faster than hard drive, they cant communicate well. RAM helps.

CPU gives info to motherboard gives info to RAM.

When we make a var we are assigning it to a random block of memory in RAM.

Binary

0000 - 0
0001 - 1
0010 - 2
0011 - 3
