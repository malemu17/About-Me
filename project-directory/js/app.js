'use strict';

var counter = 0;

var eyecolor = prompt('Is Meron\'s eye color blue ? please answer yes or no').toLowerCase();
console.log(eyecolor);
if (eyecolor === 'no') {
    counter++;
    alert('good guess !');
} else {
    alert('no worries you will know me soon!');
}


var channel = prompt('Does Meron likes Facebook channel?' + 'please answer yes or no').toLowerCase();
console.log(channel);
if (channel === 'yes') {
    counter++;
    alert('good guess !');
} else {
    alert('no worries you will know me soon!');
}



var football = prompt('Does Meron likes football?' + 'please answer yes or no').toLowerCase();
console.log(football);
if (football === 'no') {
    counter++;
    alert('good guess !');
} else {
    alert('no worries you will know me soon!');
}



var life = prompt('Do I like my life?' + 'please answer yes or no').toLowerCase();
console.log(life);
if (life === 'yes') {
    counter++;
    alert('good guess !');
} else {
    alert('no worries you will know me soon!');
}


var jokes = prompt('Do I like jokes?' + 'please answer yes or no').toLowerCase();
console.log(jokes);
if (jokes === 'yes') {
    counter++;
    alert('oh!you know me more than I can imagine!');
} else {
    alert('no worries you will know me soon!');
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
        console.log('user answer' + userCarAnswer + 'to the question of what is my favorite car');
        break;

    } else {
        alert('Nope. Try again');
        console.log('user answer' + userCarAnswer + 'to the question of what is my favorite car')
    }


}

alert('congratulations! You got: ' + counter + ' right answers');
