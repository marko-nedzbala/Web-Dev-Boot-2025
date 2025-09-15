const express = require('express');
const app = express();



app.get('/cats', (req, res) => {
    console.log('Cat request')
    res.send('Cat request')
});

// path parameters
app.get('/r/:subreddit/:postid', (req, res) => {
    // get the params, in our case subreddit
    console.log(req.params);

    const { subreddit, postid } = req.params;
    res.send(`<h1>Browsing ${ subreddit } and viewing ${ postid } id`);
});

// query string
app.get('/search', (req, res) => {
    // my example query
    // http://localhost:3000/search?q=dogs&color=red
    const { q } = req.query;
    res.send(`<h1> Search results ${ q }`);
    
});

app.use((req, res) => {
    console.log('Request has come in');
    // gives us a lot of information about the request that came in
    // console.dir(req);

    res.send('Request received. Response sent!')
});

app.get(/(.*)/, (req, res) => {
    console.log('error');
});

app.listen(3000, () => {
    console.log('Listening');
});
















