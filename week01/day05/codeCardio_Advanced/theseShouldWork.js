https://codecard.io/a/sequence/N4cJ_s7lR

Advanced #5 (works in Chrome console)

function missingNo(numArray) {
  var missingNum;
  for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] - numArray[i - 1] !== 1) {
      return i;
    }
  }
}


var myArray = [0, 1, 2, 3, 5];
missingNo(myArray);

//only works if first number is 0.

function missingNo(numArray) {
  for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] - numArray[i - 1] !== 1) {
      return numArray[i] - 1;
    }
  }
}

var myArray = [2, 3, 5];
missingNo(myArray);
//works even if first number is something other than 0.

Advanced #7 //doesn't work in chrome. Just capitalizes first letter.

function letterCapitalize(str) {
  var firstCapStr = str[0].toUpperCase() + str.substr(1, str.length);
  var newString;
  for (var i = 0; i < firstCapStr.length; i++) {
    if (firstCapStr[i] === " ") {
      newString = firstCapStr.substr(0, i) + firstCapStr[i].toUpperCase() + firstCapStr.substr(i + 1);
  	}
  }
  return newString;
}

var myString = "cap me";
letterCapitalize(myString);
