'use strict';
var score = 0;
var x = 0;
var questions = ['True or false: I have cats.', 'True or false: I like bananas.', 'True or false: I have lived in another country.', 'True or false: I like movies.', 'True or false: I am afraid of heights.'];
var correct = ['Ding ding ding! You are correct! I have two munchkin cats.', 'Correct! Hate them, with the one exception of a fried peanut butter and banana sandwich.', 'Igen! I lived in Hungary for a few months earlier this year. Super tired of paprika.', 'Maybe too much! I used to work for a large independent video store, assigned to the Horror department. I collect digitized copies of rare, out of print films, most of them foreign or within the horror genre.', 'Correct! At least, not as long as I\'m no more than thirty or so feed above ground or wearing a harness. Bouldering is one of my hobbies.'];
var incorrect = ['BZZZZZT. Wrong! I have two munchkin cats.', 'Sorry! I hate them. I know it\'s weird. :\(', 'Bocsanat, nem! I lived in Hungary for a few months earlier this year. Super tired of paprika.', 'Who doesn\'t like movies? Do you hate fun?', 'Nope! If I\'m wearing a harness or less than about thirty feet above ground, heights do not make me uncomfortable at all. Bouldering is one of my hobbies.'];
var answers = ['true', 'false', 'true', 'true', 'false'];

//Introduction
var userName = prompt('Excelsior! What is your name?');
alert('Hi, ' + userName + '! Nice to meet you. See if you can get the correct answer to the following questions about me.');

//All true/false questions in this function
function quiz () {
  for (var i = 0; i < questions.length; i++) {
    var answer1 = prompt(questions[x]).toLowerCase();
    console.log('Answer to question one was ' + answer1);
    if (answer1 === answers[x]) {
      score++;
      alert(correct[x] + '\nYour score is ' + score + '.');
    } else {
      alert(incorrect[x] + '\nYour score is ' + score + '.');
    }
    x++;
  }
}
quiz();
//Question One
/*function questionOne () {
var answer1 = prompt(questions[x]).toLowerCase();
console.log('Answer to question one was ' + answer1);
if (answer1 === 'y' || answer1 === 'yes') {
  score++;
  alert(correct[x] + 'Your score is ' + score);
} else {
  alert(incorrect[x] + 'Your score is ' + score);
}
x++;
}

//Question Two
function questionTwo () {
var answer2 = prompt(questions[x]).toLowerCase();
console.log('Answer to question two was ' + answer2);
if (answer2 === 'n' || answer2 === 'no'){
  score++;
  alert(correct[x] + 'Your score is ' + score);
} else {
  alert(incorrect[x] + 'Your score is ' + score);
}
x++;
}

//Question Three
function questionThree () {
var answer3 = prompt(questions[x]).toLowerCase();
console.log('Answer to question three was ' + answer3);
if (answer3 === 'y' || answer3 === 'yes'){
  score++;
  alert(correct[x] + 'Your score is ' + score);
} else {
  alert(incorrect[x] + 'Your score is ' + score);
}
x++;
}
//Question Four
function questionFour () {
var answer4 = prompt(questions[x]).toLowerCase();
console.log('Answer to question four was ' + answer4);
if (answer4 === 'y' || answer4 === 'yes'){
  score++;
  alert(correct[x] + 'Your score is ' + score);
} else {
  alert(incorrect[x] + 'Your score is ' + score);
}
x++;
}
// Question Five
function questionFive () {
var answer5 = prompt(questions[x]).toLowerCase();
console.log('Answer to question five was ' + answer5);
if (answer5 === 'n' || answer5 === 'no'){
  score++;
  alert(correct[x] + 'Your score is ' + score);
} else {
  alert(incorrect[x] + 'Your score is ' + score);
}
x++;
}
*/


//Question Six
var answer6 = 0;
var attempts = 0;
do {
  answer6 = parseInt(prompt('How many countries have I visited?'));
  if (answer6 === 9) {
    score++;
    alert('Correct! Your score is ' + score + '.');
    console.log('User entered ' + answer6);
    break;
  } else if (answer6 < 9) {
    alert('More than that! Try again.');
    console.log('User entered ' + answer6);
    attempts++;
  } else if (answer6 > 9) {
    alert('Not that many! Try again.');
    console.log('User entered ' + answer6);
    attempts++;
  } if (attempts >= 4) {
    alert('Sorry, you have run out of attempts. :( Your score remains ' + score + '.');
  }
}
while (attempts < 4);

//Question Seven
var answer7 = 0;
attempts = 0;
var options = ['louisiana','georgia','mississippi','alabama','kentucky','florida'];
do {
  answer7 = prompt('Can you guess a state I have lived in, other than Washington?').toLowerCase();
  if (answer7 === options[1]) {
    score++;
    alert('Correct! Your score is ' + score + '.');
    console.log('User entered ' + answer7);
    break;
  } else {
    alert('Nope! Try again.');
    console.log('User entered ' + answer7);
    attempts++;
  }
}
while (attempts < 6);

//Congratulations
alert('Good effort, ' + userName + '! Thanks for playing.\nYour final score is ' + score + '.');
