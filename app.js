const express = require('express');
const app = express();
const hbs = require('hbs');
const { getDogImage, formatBreed } = require('./dogs/getDogsImage');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');

// Midlewares
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

// Partials
hbs.registerPartials( __dirname + '/views/partials');

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/breeds', async (req, res) => {
    let breedDog = req.body.breed;
    breedDog = formatBreed(breedDog);
    
    getDogImage(breedDog)
        .then( result => {
            console.log(result.url);
            res.render('home', {url:  result.url });
        })
        .catch( e => console.log(e));
});

app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}`);
}); 