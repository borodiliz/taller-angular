var express = require('express');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.get('/movies', function(req, res) {
    var moviesCollection = [
        {
            id: 1,
            title: 'The Bourne Identity',
            year: '2002',
            imdbRating: '7.9',
            image: 'http://ia.media-imdb.com/images/M/MV5BMTQ3MDA4MDIyN15BMl5BanBnXkFtZTYwOTg0Njk4._V1_SX214_AL_.jpg',
            actors: [1, 2]
        },
        {
            id: 2,
            title: 'The Bourne Supremacy',
            year: '2004',
            imdbRating: '7.8',
            image: 'http://ia.media-imdb.com/images/M/MV5BMTAxODk0MjEyMjZeQTJeQWpwZ15BbWU2MDgzMzExNw@@._V1_SX214_AL_.jpg',
            actors: [1, 2]
        },
        {
            id: 3,
            title: 'The Bourne Ultimatum',
            year: '2007',
            imdbRating: '8.1',
            image: 'http://ia.media-imdb.com/images/M/MV5BMTgzNjMwOTM3N15BMl5BanBnXkFtZTcwMzA5MDY0MQ@@._V1_SX214_AL_.jpg',
            actors: [1]
        },
        {
            id: 4,
            title: 'The Bourne Legacy',
            year: '2012',
            imdbRating: '6.7',
            image: 'http://ia.media-imdb.com/images/M/MV5BMTc4Njk3MDM1Nl5BMl5BanBnXkFtZTcwODgyOTMxOA@@._V1_SX214_AL_.jpg',
            actors: [3]
        },
        {
            id: 5,
            title: 'Interstellar',
            year: '2014',
            imdbRating: '8.8',
            image: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX214_AL_.jpg',
            actors: [],
            synopsis: "A team of explorers travel through a wormhole in an attempt to ensure humanity's survival."
        }
    ];

    res.send(moviesCollection);
});

app.get('/actors', function(req, res) {
    var actorsCollection = [
        {
            id: 1,
            name: 'Matt Damon'
        },
        {
            id: 2,
            name: 'Franka Potente'
        },
        {
            id: 3,
            name: 'Jeremy Renner'
        }
    ];

    res.send(actorsCollection);
});

var server = app.listen(1337, function () {
    var port = server.address().port;

    console.log('Moviegami server listening at http://localhost:%s', port);
});