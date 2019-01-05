///////////////////////////////////////
// Lecture: Hoisting
calculateAge = (year) => {
  console.log(2018 - year);
}

// hoisting only works with function declarations,
// not function expressions

calculateAge(1986); // this works

// function declaration
function calculateAge(year) {
  console.log(2018-year);
}

// retirement(1986); // does not work

//function expression
var retirement = function(year) {
  console.log('whatever');
}

// variables
// console.log(age);
let age = 32;

function foo(){
  let age = 64;
  console.log(age);
}

foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// /*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// */



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
