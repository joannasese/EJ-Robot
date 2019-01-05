// LECTURE 61: Inheritance in JS: Prototypes and prototype chains

// Every object has a prototype property, which makes inheritance possible in js
// The prototype property of an object is where we put methods and properties that we want other objects to inherit
// The Constructor's prototype property is NOT the prototype of the Constructor,
// it's the prototype of all instances that are created through it
// When a certain method (or property) is called, the search starts in the object itself,
// and if it cannot be found, the search moves to the object's prototype.
// The search continues until the method is found.
// This is the protoype chain.

// Function constructor

// var joanna = {
//   name: 'Joanna';
//   yearOfBirth: 1986;
//   job: 'Panda';
// };

// function constructors being with capital letter
var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function() {
  //   console.log(2018-this.yearOfBirth);
  // }
};

// prototype property allows for
// method is not in constructor but can still be used
// bc it's in the prototype property of the function constructor
Person.prototype.calculateAge =
function() {
  console.log(2018-this.yearOfBirth);
}
Person.prototype.lastName = 'Jambalaya';
// use function constructor to create object
// called 'instantiation'
// 1. first, new operator creates an empty object
// 2. function is called
var joanna = new Person('Joanna', 1986, 'panda');
var lucy = new Person('Lucy', 1678, 'dead');
var kim = new Person('Kim', 1243, 'ancient');

joanna.calculateAge();
lucy.calculateAge();
kim.calculateAge();
console.log(joanna.lastName);

// LECTURE 63: Creating Objects with object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018-this.yearOfBirth)
  }
};

var joanna = Object.create(personProto);
joanna.name = 'Joanna';
joanna.yearOfBirth = 1986;
joanna.job = 'panda';

var jim = Object.create(personProto,
{
  name: {value: 'Jim'},
  yearOfBirth: {value: 1374},
  job: {value: 'designer'}
});
*/

// PRIMITIVES VS OBJECTS
// numbers, strings, booleans, undefined, and null are primitives
// everything else are objects
// primitives hold data in the variable itself

// primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23

// objects
var obj1 = {
  name: 'Joanna',
  age: 32
};
var obj2 = obj1;
obj1.age = 43;
console.log(obj1.age); //43
console.log(obj2.age); //43

// functions
var age = 27;
var obj = {
  name: 'Mikel',
  city: 'Beirut'
};

function change(a,b) {
  a = 30;
  b.city = 'Marrakesh';
}

change(age, obj);
console.log(age); //27
console.log(obj.city); //Marrakesh
// primitive remains unchanged
// object changes

// LECTURE 65: First Class Functions
var years = [1864, 1783, 1874, 1287, 2015];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (let i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// callback function
function calculateAge(el){
  return 2018-el;
}

function legalAge(el){
  return el >= 21;
}

var ages = arrayCalc(years, calculateAge);
// note that we don't call the function here, we just pass in the function variable
// because we want the function to run later on
var legalAges = arrayCalc(ages, legalAge);
console.log(ages);
console.log(legalAges);

// LECTURE 66: Functions Returning Functions
function interviewQuestion(job){
  if (job === 'designer'){
    // return anonymous function
    return function(name){
      console.log(`${name}, what is UX?`);
    }
  } else if (job === 'teacher'){
    return function(name){
      console.log(`${name}, what subject do you teach?`);
    }
  } else {
    return function(name){
      console.log(`${name}, what do you do?`);
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
console.log(teacherQuestion('Jim'));

var designerQuestion = interviewQuestion('designer');
console.log(designerQuestion('Judy'));

interviewQuestion('teacher')('Natalie');

// LECTURE 67: Immediately invoked function expressions (IIFE)
function game(){
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// iife
(function (){
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// LECTURE 68: Closures
function retirement(retirementAge){
  var a = ' years left until retirement.'
  return function(yearOfBirth){
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1986);
//retirement(66)(1986);

// re-write function from lecture 66 using closures
function interviewQuestion(job){
  return function(name){
    if (job === 'designer'){
      console.log(`${name}, what is UX?`);
    } else if (job === 'teacher'){
        console.log(`${name}, what subject do you teach?`);
    } else {
        console.log(`${name}, what do you do?`);
    }
  }
}
interviewQuestion('teacher')('Joanna');

// LECTURE 69: Bind, call and apply
var john = {
  name: 'John',
  age: 87,
  job: 'retired',
  presentation: function(style, timeOfDay){
    if (style === 'formal'){
      console.log(`Good grief. ${this.name} is super fancy in the ${timeOfDay}.`)
    } else if (style === 'casual'){
      console.log(`Sick. ${this.name} is super casual in the ${timeOfDay}.`)
    } else {
      console.log(`I guess ${this.name} does whatever he wants in the ${timeOfDay}.`)
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

var mumford = {
  name: 'Mumford',
  age: 37,
  job: 'writer'
};

john.presentation('formal', 'mornings');
// method borrowing below
john.presentation.call(emily, 'casual', 'afternoons');
// apply is similar to call except that it accepts arrays
john.presentation.apply(mumford, ['dapper', 'afternoons']);

// bind
var johnFriend = john.presentation.bind(john, 'friendly')
johnFriend('mornings');
johnFriend('evenings');




var years = [1864, 1783, 1874, 1287, 2015];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (let i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el){
  return 2018-el;
}

function legalAge(limit, el){
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, legalAge.bind(this, 20));
console.log(fullJapan);

// LECTURE 70 Coding Challenge
/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// var Question = function(){
//   var questions = [
//     'What color are piglets?',
//     'Is tape sticky?',
//     'Is water wet?'
//   ]
//   var correctAnswer;
//
//   function getAnswer(el){
//     if (el === correctAnswer){
//       addScore()
//     } else {
//       console.log('Wrong answer. Try again.');
//     }
//   }
//
//   var score = 0;
//   function addScore(){
//     score++
//     console.log('Correct Answer!')
//     console.log(`Your current score is: ${score}`)
//   }
//
//   var answer = parseInt(prompt('Type in your answer.'));
//
//
//   // var question = (Math.floor(Math.random() * questions.length));
// var question = 0;
//   if (question === 0){
//     console.log(questions[0]);
//     console.log('0: Pink');
//     console.log('1: Blue');
//     console.log('2: Chartreuse');
//     correctAnswer = 0;
//     // var answer = parseInt(prompt('Type in your answer.'));
//
//     getAnswer(answer)
//   } else if (question === 1){
//     console.log(questions[1]);
//     console.log('0: Yes');
//     console.log('1: No');
//     console.log('2: Maybe');
//   } else {
//     console.log(questions[2]);
//     console.log('0: Definitely');
//     console.log('1: Let me check');
//   }
//
// }
//
// Question();


// (function (){ //iife
// // function constructor
// function Question(question, answers, correct){
//   this.question = question;
//   this.answers = answers;
//   this.correct = correct;
// }
//
// var answer;
//
// Question.prototype.displayQuestion =
//   function(){
//     console.log(this.question);
//
//     for (var i = 0; i < this.answers.length; i++){
//       console.log(`${i}: ${this.answers[i]}`)
//     }
//   }
//
// Question.prototype.checkAnswer =
//   function(el){
//     if (el === this.correct){
//       console.log('Yea you right.');
//     } else {
//       console.log('Sorry try again.');
//     }
//   }
//
// var q1 = new Question(
//   'What color are piglets?',
//   ['Pink', 'Blue', 'Chartreuse'],
//   0
// );
//
// var q2 = new Question(
//   'Is water wet?',
//   ['Yes', 'No', 'Maybe'],
//   0
// );
//
// var q3 = new Question(
//   'Why is there glitter everywhere?',
//   ['Because why not?', 'I don\'t know what you\'re talking about.', 'I don\'t know but I love it.'],
//   2
// );
//
// var questions = [q1, q2, q3];
// var randomQuestion = (Math.floor(Math.random() * questions.length));
//
//
// questions[randomQuestion].displayQuestion();
//
// var answer = parseInt(prompt('Type in your answer.'));
//
// questions[randomQuestion].checkAnswer(answer);
// })();

// EXPERT LEVEL
(function (){ //iife
// function constructor
function Question(question, answers, correct){
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion =
  function(){
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++){
      console.log(`${i}: ${this.answers[i]}`)
    }
  }

Question.prototype.checkAnswer =
  function(el, callback){
    var sc;
    if (el === this.correct){
      console.log('Yea you right.');
      sc = callback(true);
    } else {
      console.log('Sorry try again.');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore =
    function(score){
      console.log(`Your score is ${score}`);
      console.log('--------')
    }

var q1 = new Question(
  'What color are piglets?',
  ['Pink', 'Blue', 'Chartreuse'],
  0
);

var q2 = new Question(
  'Is water wet?',
  ['Yes', 'No', 'Maybe'],
  0
);

var q3 = new Question(
  'Why is there glitter everywhere?',
  ['Because why not?', 'I don\'t know what you\'re talking about.', 'I don\'t know but I love it.'],
  2
);

var questions = [q1, q2, q3];

function playerScore(){
  var score = 0;
  return function(correct){
    if (correct){
      score++;
    }
    return score;
  }
}

var keepScore = playerScore();

function nextQuestion(){
  var randomQuestion = (Math.floor(Math.random() * questions.length));
  questions[randomQuestion].displayQuestion();
  var answer = prompt('Type in your answer.');
  if (answer !== 'exit'){
    questions[randomQuestion].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
  }
}

nextQuestion();
})();
