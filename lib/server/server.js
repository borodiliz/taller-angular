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
            id: 'nm0000354',
            name: 'Matt Damon',
            image: 'http://ia.media-imdb.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_SY317_CR11,0,214,317_AL_.jpg',
            bio: 'Matthew Paige Damon was born on October 8, 1970, in Boston Massachusetts, to Kent Damon, a stockbroker, realtor and tax preparer, and Nancy Carlsson-Paige, an early childhood education professor at Lesley University. Matt has an older brother named Kyle who is now a sculptor.',
            imdbRanking: 59
        },
        {
            id: 'nm1297015',
            name: 'Emma Stone',
            image: 'http://ia.media-imdb.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_SX214_CR0,0,214,317_AL_.jpg',
            bio: 'Emma Stone was born in Scottsdale, Arizona, to Krista (Yeager), a homemaker, and Jeffrey Stone, a contracting company founder and CEO. She is of Swedish (from her paternal grandfather), English, German, Scottish, and Irish descent. Stone began acting as a child as a member of the Valley Youth Theatre in Phoenix, Arizona, where she made her stage ...',
            imdbRanking: 33
        },
        {
            id: 'nm0000190',
            name: 'Matthew McConaughey',
            image: 'http://ia.media-imdb.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_SX214_CR0,0,214,317_AL_.jpg',
            bio: 'Matthew McConaughey was born in Uvalde, Texas. His mother, Mary Kathleen (McCabe), is a substitute school teacher originally from New Jersey. His father, James Donald McConaughey, was a Mississippi-born gas station owner who ran an oil pipe supply business. He is of Scottish, Irish, English, German, and Swedish descent. Matthew grew up in Longview ...',
            imdbRanking: 49
        },
        {
            id: 'nm0004266',
            name: 'Anne Hathaway',
            image: 'http://ia.media-imdb.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_SY317_CR1,0,214,317_AL_.jpg',
            bio: 'Anne Hathaway was born in Brooklyn, New York, to Kathleen Ann (McCauley), an actress, and Gerald Thomas Hathaway, a lawyer, both originally from Philadelphia. She is of mostly Irish descent, along with English, German, and French. Her first major role came in the short-lived television series Asuntos de familia (1999). She gained widespread ...',
            imdbRanking: 79
        }
    ];

    res.send(actorsCollection);
});

var server = app.listen(1337, function () {
    var port = server.address().port;

    console.log('Moviegami server listening at http://localhost:%s', port);
});