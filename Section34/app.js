const path = require('path');
const express = require('express');
const app = express();

// importing data
const myData = require('./data.json');

// using static files
app.use(express.static(path.join(__dirname, 'public')));

// set the template engine
// need to create a views directory
app.set('view engine', 'ejs');
// join the current directory to join our views
// we need this because if we execute the app.js from a different directory 'views' will not be found
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // name of our file
    res.render('home');
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;

    // pass in an object into the template
    // and reference the 'randomNumber' variable in the template
    res.render('random', {randomNumber: num});
});

app.get('/r/:subreddit', (req, res) => {

    // example data to loop through
    const things = ['item01', 'stuff', 'misc', 'junk'];


    const { subreddit } = req.params;
    res.render('subreddit', { subreddit, arr: things });
});

// loading data passed on parameters
app.get('/:keyData', (req, res) => {
    const { keyData } = req.params;
    const data = myData[keyData];
    if(data) {
        console.log(data);

        // pass in the data via ...data, so we can access the properties
        res.render('loadData', { ...data });
    } else {
        res.render('notFound', { keyData });
    }
});












app.listen(3000, () => {
    console.log('Listening on Port 3000');
});



