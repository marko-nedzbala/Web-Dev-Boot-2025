const path = require('path');
const express = require('express');
const app = express();

// allows us to use methods, like PUT, in forms that would not normally support it
const methodOverride = require('method-override');

// get unique ids
const { v4: uuidv4 } = require('uuid');
// call uuidv4(); to get the unqiue identifier

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

// parse the request body as URL encoded data, form data
app.use(express.urlencoded({ extended: true }));

// parse JSON data
app.use(express.json());

// provide the way to use methodOverride
app.use(methodOverride('_method'));

app.get('/stuff', (req, res) => {
    // res.render('formResult');
    res.send('GET');
});

app.post('/stuff', (req, res) => {
    // receive the data from the request object
    const { input, qty } = req.body;
    res.send(`Input: ${input} and Quantity is: ${ qty }`);
});



// RESTful part
let comments = [
    {
        id: uuidv4(),
        username: "Todd",
        comment: "Todds comment"
    },
    {
        id: uuidv4(),
        username: "Jimmy",
        comment: "Jimmys comment"
    },
    {
        id: uuidv4(),
        username: "Bobby",
        comment: "Bobbys comment"
    },
    {
        id: uuidv4(),
        username: "Sally",
        comment: "Sallys comment"
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

// serve the form, the 'new' route
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() });

    // redirects us to to the location after the form is complete
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params; // this id will be a string
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

// get the form to serve to the user
// forms can only be GET or POST
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});



app.listen(3000, () => {
    console.log('Website is running');
});






























