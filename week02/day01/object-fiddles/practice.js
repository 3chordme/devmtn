//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name,
//and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "David",
  age: 32
};

console.log(me);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
//Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "bat manors",
  food: "chicken and waffles",
  person: "juliet",
  book: "catch-22",
  movie: "I can't pick a favorite movie!",
  holiday: "Christmas"
};

console.log(favoriteThings);

//After you've made your object, add another key named 'car' with the value being your favorite car and then
//another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "prius c, bitch";
favoriteThings.brand = "Favorite brand? Don't be vulgar.";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your
//favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";

console.log(favoriteThings);



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backpack = new Object();

var item = "firstPocket";

backpack[item] = "chapstick";

backpack.color = "red";

//After you do the above, alert your entire backPack object.

alert(backpack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backpack);

//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor,
//hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Yosemite Sam",
  age: "42",
  height: "4'2''",
  gender: "Male",
  married: false,
  eyeColor: "Brown",
  hairColor: "Red"
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (prop in me) {
  console.log(me[prop]);
};



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values
//being the length of each song.

var album = {
  song1: "00:37",
  song2: "00:59",
  song3: "00:12",
  song4: "00:43",
  "Every Time I Think of You (I Throw Up In My Mouth)": "52:37"
};

//Now, loop through your album object alerting every song title individually.

for (song in album) {
  console.log(song);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population
//(doesn't have to be accurate).

var states = {
  Texas: 1000000000,
  California: 1000000000,
  "New York": 1000000000,
  Alabama: 2,
  Alaska: 1
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var state in states) {
  if (states[state] > 30000) {
  alert(state);
  }
};



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var prop in user) {
  if (!user[prop]) {
    delete user[prop];
  }
}

console.log(user);

//Once you get your truthy Object, Change the remaining values in the object to be specific to you
//(name: 'your name', username: 'your username'), rather than my information.

user.name = "David";
user.username = "3chordme";
user.pwHash = "Corned Beef";

console.log(user);

//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";

console.log(user);

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = new Object();

console.log(methodCollection);

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert("hello");
}

methodCollection.logHello = function() {
  console.log("hello");
}

//Now call your alertHello and logHello methods.

methodCollection.logHello();
methodCollection.alertHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a
//new object with all of the information that you passed in.

function MakePerson(name, birthday, ssn) {
  this.name = name;
  this.birthday = birthday;
  this.ssn = ssn;
}

var newPerson = new MakePerson("David", "07/05/83", "um....no");
console.log(newPerson);

//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object
//and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

var MakeCard = function(date, no, type) {
  this.date = date;
  this.no = no;
  this.type = type;
};

var myCard = new MakeCard("07/77", "432385940329585", "Visa");
console.log(myCard);

//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a
person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a
   creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties
   from the person as well as the creditcard.
*/

  //Code Here

function bindCard(person, card) {
  var result = {};

  for (prop in person) {
    result[prop] = person[prop];
  }

  for (prop in card) {
    result[prop] = card[prop];
  }

  return result;
}

var fullPerson = bindCard(newPerson, myCard);
console.log(fullPerson);
