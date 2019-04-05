
var isDivisibleByThree = function(number){
  parseInt(number);
  if(number % 3 === 0 && number != 0) {
    return true;
  } else {
    return false;
  };
};

var isBeep = function(number) {
  number.split("");
  for (var index = 0; index <= number.length; index += 1) {
    if(number[index] === "0") {
      return true;
    };
  };
  return false;
};

var isBoop = function(number) {
  number.split("");
  for (var index = 0; index <= number.length; index += 1) {
    if(number[index] === "1") {
      return true;
    };
  };
  return false;
};

var returnRange = function(number) {
  var rangeArray = [];
  for(var index = 0; index <= number; index += 1) {
    rangeArray[index] = index;
  };
  return rangeArray;
};

var checkForAllExceptions = function(number, name) {
  if (isNaN(number) == true) {
    number = "Please, make sure to enter a number";
    return number;
  } else if (isDivisibleByThree(number) === true) {
    number = "I'm sorry, " + name + ". I'm afraid I can't do that.";
    return number;
  } else if (isBoop(number) === true) {
    number = "Boop!";
    return number;
  } else if (isBeep(number) === true) {
    number = "Beep!";
    return number;
  } else {
    return returnRange(number);
  };
};

//
// User Interface logic
//
$(document).ready(function() {

  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();
    var userName = $("input#name").val();
    userInput = checkForAllExceptions(userInput, userName);
    $(".output").text(userInput);
    $("#result").show();
  });

});
