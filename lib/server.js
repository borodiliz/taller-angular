var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.get('/movies', function(req, res) {
    var moviesCollection = [
        {
            id: 1,
            title: 'The Bourne Identity',
            year: '2002',
            imdbRating: '7.9'
        },
        {
            id: 2,
            title: 'The Bourne Supremacy',
            year: '2004',
            imdbRating: '7.8'
        },
        {
            id: 3,
            title: 'The Bourne Ultimatum',
            year: '2007',
            imdbRating: '8.1'
        },
        {
            id: 4,
            title: 'The Bourne Legacy',
            year: '2012',
            imdbRating: '6.7'
        }
    ];

    res.send(moviesCollection);
});

var server = app.listen(1337, function () {
    var port = server.address().port;

    console.log('Moviegami server listening at http://localhost:%s', port);
});