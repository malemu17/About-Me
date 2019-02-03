'use strict';

var counter = 0;

var eyecolor = prompt('Is Meron\'s eye color blue ? please answer yes or no').toLowerCase();
console.log(eyecolor);
if (eyecolor === 'no') {
  counter++;
  alert('you are right');
} else {
  alert('you are wrong');
}


var channel = prompt('Does Meron likes Facebook channel?' + 'please answer yes or no').toLowerCase();
console.log(channel);
if (channel === 'yes') {
  counter++;
  alert('you are right');
} else {
  alert('you are wrong');
}



var football = prompt('Does Meron likes football?' + 'please answer yes or no').toLowerCase();
console.log(football);
if (football === 'no') {
  counter++;
  alert('you are right');
} else {
  alert('you are wrong');
}



var life = prompt('Do I like my life?' + 'please answer yes or no').toLowerCase();
console.log(life);
if (life === 'yes') {
  counter++;
  alert('you are right');
} else {
  alert('you are wrong');
}


var jokes = prompt('Do I like jokes?' + 'please answer yes or no').toLowerCase();
console.log(jokes);
if (jokes === 'yes') {
  counter++;
  alert('you are right');
} else {
  alert('you are wrong');
}

var tries = 4;

while (tries > 0) {
  var birthDate = prompt('What day of the month is my birthday?');
  console.log(birthDate);
  if (birthDate == 10) {
    // eslint-disable-next-line no-undef
    attempts = 0;
    alert('Genius! How did you know?');
    //some sort of breaking out of a loop
    break;
  } else if (birthDate < 10) {
    alert('Please try again');
    tries--;
  } else {
    counter++;
    alert('Please try again');
    tries--;
  }

}

for (var u = 0; u < 6; u++) {

  var car = ['honda', 'toyota', 'bmw', 'tesla'];

  var userCarAnswer = prompt('What is my favorite car?');
  userCarAnswer.toLowerCase();
  if (car.includes(userCarAnswer)) {
    counter++;


    alert('That is right');
    console.log('user answer' + userCarAnswer + 'to the question of what is my favorite food');
    break;

  } else {
    alert('Nope. Try again');
    console.log('user answer' + userCarAnswer + 'to the question of what is my favorite food')
  }


}

alert('congratulations! You got' + counter + ' right');
