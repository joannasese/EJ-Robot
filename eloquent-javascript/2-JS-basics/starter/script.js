/*
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI
(Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about
whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable
from step 3. (Something like "Is Mark's BMI higher than
John's? true").

GOOD LUCK 😀
*/

var markMass, markHeight, johnMass, johnHeight;
markMass = 72;
markHeight = 2;
johnMass = 68;
johnHeight = 2.5;

var markBMI = markMass / Math.pow(markHeight, 2);
var johnBMI = johnMass / Math.pow(johnHeight, 2);

var markHigherThanJohn = markBMI > johnBMI;

console.log(`Is Mark's BMI higher than John's?
${markHigherThanJohn}. It is ${markBMI} while
John's is ${johnBMI}.`);



// IF/ELSE STATEMENTS
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(`${firstName} is married!`)
} else {
  console.log(`${firstName} is ${civilStatus}.`)
}

var isMarried = false;
if (isMarried) {
  console.log(`${firstName} is married.`)
} else {
  console.log(`${firstName} is not boo'ed up.`)
}

var firstName = 'John';
var age = 16;

// ternary
age >= 18 ? console.log(`${firstName} is legal.`)
: console.log(`${firstName} is a child`);

var drink = age >= 17 ? 'beer' : 'juice';
console.log(drink)

// switch statement
var job = 'banana';
switch (job) {
  case 'teacher':
    console.log(`${firstName} is a teacher.`);
    break;
  case 'driver':
    console.log(`${firstName} is a driver.`);
    break;
  case 'fruitsnack':
    console.log(`${firstName} is a fruitsnack.`);
    break;
  default:
    console.log(`${firstName} does something else.`)
}

// * CODING CHALLENGE 2
// */
//
// /*
// // John and Mike both play basketball in different teams.
// In the latest 3 games, John's team scored 89, 120 and 103
// points, while Mike's team scored 116, 94 and 123 points.
// //
// // 1. Calculate the average score for each team
// // 2. Decide which teams wins in average (highest average
// score), and print the winner to the console. Also include the average score in the output.
// // 3. Then change the scores to show different winners.
// Don't forget to take into account there might be a draw (the same average score)
// //
// // 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134 and 105 points. Like before, log the average winner
 // to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// // 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.
//
// GOOD LUCK 😀

var teamJohn = Math.floor((123+120+103)/3)
var teamMike = Math.floor((116+94+123)/3)
var teamMary = Math.floor((200+134+105)/3)

if (teamJohn > teamMike && teamJohn > teamMary){
  console.log(`Team John wins with ${teamJohn} points!`)
} else if (teamMike > teamJohn && teamMike > teamMary){
  console.log(`Team Mike wins with ${teamMike} points!`)
} else if (teamMary > teamJohn && teamMary > teamMike){
  console.log(`Team Mary wins with ${teamMary} points!`)
} else {
  console.log('It\'s a tie!')
}

// FUNCTIONS
// function calculateAge(birthYear){
//   return 2018 - birthYear;
// }

calculateAge = (birthYear) => {
  return 2018 - birthYear;
}

var age = calculateAge(1986);
console.log(age);

retirementYear = (year, firstName) => {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(`${firstName} retires in ${retirement} years.`);
}

retirementYear(1986, 'Joanna');

// Function Statements and Expressions
// Function Declaration
function work(job, firstName) {

}
// Function Expression
var work = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return `${firstName} teaches.`
    case 'driver':
      return `${firstName} drives`
    case 'designer':
      return `${firstName} designs`
    default:
      return `Whatever.`
  }
}

console.log(work('pie', 'Coola'))

// Arrays
var names = ['Jen', 'Ro', 'Jo'];
var years = new Array(1989, 1988, 1986);

// Mutate Array
names[1] = 'Jess';

console.log(names);
console.log(names.length);
names[names.length] = 'Homes';
console.log(names);

// Objects
// object literal
var john = {
  firstName: 'John',
  lastName: 'Mulaney',
  age: 48,
  family: ['Judy', 'James', 'Phiefel'],
  job: 'teacher'
};
console.log('john\'s age: '+ john.age);
console.log(`john's family: ${john['family']}`)

var jane = new Object();
console.log(jane);
jane.firstName = 'Jane';
jane.birthYear = 1967;
// console.log(jane['firstName']);
// console.log(jane.birthYear);

console.log(john)
var john = {
  firstName: 'John',
  lastName: 'Mulaney',
  birthYear: 1979,
  family: ['Judy', 'James', 'Phiefel'],
  job: 'teacher',
  calcAge: function() {
    this.age =  2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john)

// CODING CHALLANGE 4
var mark = {
  fullName: 'Mark Mark',
  mass: 768798,
  height: 43,
  calcBmi: function() {
    this.bmi = this.mass / Math.pow(this.height, 2);
    return this.bmi;
  }
};

var john = {
  fullName: 'John John',
  mass: 78,
  height: 232,
  calcBmi: function() {
    this.bmi = this.mass / Math.pow(this.height, 2);
    return this.bmi;
  }
}

if (mark.calcBmi() > john.calcBmi()){
  console.log('mark is bigger');
} else if (john.calcBmi() > mark.calcBmi()){
  console.log('john is bigger');
} else {
  console.log('they\'re both the same.');
}

// LOOPS
// for loops
for (let i = 0; i < 10; i++){
  console.log(i);
}

var john = ['John', 'Smith', 1999, 'child'];
for (var i = 0; i < john.length; i++){
  console.log(john[i]);
}

// while loops
var i = 0;
while(i < john.length){
  console.log(john[i]);
  i++;
}

// continue and break statements
// print strings only
var john = ['John', 'Smith', 1990, 'designer', false];
for (let i = 0; i < john.length; i++){
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
// loop breaks when it hits a non-string
for (let i = 0; i < john.length; i++){
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// looping backwards
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = john.length-1; i >= 0; i--){
  console.log(john[i]);
}

// CODE CHALLENGE #5
var allBills = {
  bills: [124, 48, 268, 180, 42],
  tips: function(){
    var allTips = [];
    var paidBills = [];

    for (var i = 0; i < this.bills.length; i++){
      var bill = this.bills[i];
      if (bill < 50){
        var tip = parseInt((bill*.20).toFixed(2));
      } else if (bill >= 50 && bill <= 200){
        var tip = parseInt((bill*.15).toFixed(2));
      } else {
        var tip = parseInt((bill*.10).toFixed(2));
      }
      var tippedBill = bill + tip;
      allTips.push(tip);
      paidBills.push(tippedBill);
    }
    // console.log(`All Tips: ${allTips}`);
    // console.log(`All Bills \+ tip: ${paidBills}`);
    console.log(allTips);
    console.log(paidBills);
  }
};

allBills.tips();
console.log(allBills);
