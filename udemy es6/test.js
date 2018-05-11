var colours = ['red', 'blue', 'green'];

//bad
/*
for (int i = 0; i < 3; i++) {
  console.log(colours[i])
}
*/
//good
colours.forEach(function(colour) {
  console.log(colour)
});

////////////////////////////////////////
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

console.log(sum)
///////////////////////////////////////
var numbers = [1, 2, 3];
var doublenums = [];

var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;

///////////////////////////////////