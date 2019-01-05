// Lecture: let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5); // Jane Miller

// ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
//
// console.log(name6); // error

// ES5
function driversLicense(passedTest){
  if (passedTest){
    var firstName = 'John';
    var yearOfBirth = 1990;
    console.log(firstName);
  }
}
driversLicense(true);

// ES6
function driversLicense6(passedTest){
  if (passedTest){
    let firstName = 'John';
    const yearOfBirth = 1990;
    console.log(`${firstName} was born in ${yearOfBirth}`);
    // above works
  }
  console.log(`${firstName} was born in ${yearOfBirth}`); // not block scoped
  // error: let and const variables only accessible within their blocks
}
driversLicense6(true);

// test line
