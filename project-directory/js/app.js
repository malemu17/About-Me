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
    alert('oh!you know me more than I can imagine!' + 'keep trying');
} else {
    alert('no worries you will know me soon!');
}

var tries = 4;

while (tries > 0) {
    var favoriteDay = prompt('What day of the month is my favorite day ?');
    console.log(favoriteDay);
    if (favoriteDay == 16) {
        counter++;
        // eslint-disable-next-line no-undef
        attempts = 0;
        alert('Awesome!');
        //some sort of breaking out of a loop
        break;
    } else if (favoriteDay < 16) {
        alert(' your guess is too low!!Please try again');
        tries--;
    } else {

        alert(' your guess is too high !!!Please try again');
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

alert('Thank you! You got: ' + counter + ' right answers');
