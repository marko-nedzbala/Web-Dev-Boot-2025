const math = require('./math');
console.log(math);
console.log(math.add(5, 8));


// index.js is the 'main' for the directory
// can import the module this way
const exmple = require('./example');
console.log(exmple);

const jokes = require('give-me-a-joke');
jokes.getRandomDadJoke(function (joke) {
    console.log(joke);
});

const colors = require('colors');
console.log('My string should appear as a rainbow'.rainbow);

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});
















