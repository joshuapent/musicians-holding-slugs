const express = require('express');
const app = express();
//this brings in the exports from the musicians controller
const musiciansController = require('./controllers/musicians')


//this is setting up that ejs will be used in the project and it will be in a directory named views. The directory has to be named views.
app.set('view engine', 'ejs');

//I want to make sure I have a generic home route first, but I also 

// All of my routes.
app.use('/musicians', musiciansController)

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/*', (req, res) => {
    res.render('404.ejs');
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
})