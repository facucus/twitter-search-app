var express = require('express');
var path = require('path');
var twit = require('twit');
var config = require('./config.js');
app = express();
var Twitter = new twit(config);

app.use('/static', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/tweets/:q/:id?', function (req, res) {
  var id = req.params.id;
  var query_decoded = decodeURIComponent(req.params.q);
  var params = {
        q: query_decoded,
        result_type: 'recent',
        lang: 'en',
        count: 50
  }
  if (id) {
    params.max_id = id;
  }
  Twitter.get('search/tweets', params, function(err, data) {
    if (err) return res.status(500).json({error: err});

    return res.json( { tweets: data } );
  });
});

app.get('/users/:q', function(req, res) {
  var query_decoded = decodeURIComponent(req.params.q);
  var params = {
        q: query_decoded,
        count: 5
    };
  Twitter.get('users/search', params, function(err, data) {
    if (err) res.status(500).json({error: err});

    return res.json( { users: data } );
  });
})

app.get('/tweet/:id', function(req, res) {
  var query_decoded = decodeURIComponent(req.params.id);
  var params = {
    id: query_decoded
  };

  Twitter.get('statuses/show/:id', params, function(err, data) {
    if (err) res.status(500).json({error: err})

    return res.json( { tweet: data } );
  })
});

app.listen(3333, function(err) {
  if (err) return console.log(err);
  console.log('Listening on port 3333');
})
