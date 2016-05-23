var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var robert = [{
  id: 1,
  name: 'Mittens',
  photo: 'http://placekitten.com/g/100/100',
  project: 'Catch the mysterious red dot',
  description: 'Minimum research bugdet: $4000. Supplies and napping costs: $2000. With your support we can end this once and for all.',
  raised: 0,
  target: 7000
}, {
  id: 2,
  name: 'Garfield',
  photo: 'http://placekitten.com/g/150/100',
  project: 'Eat lasagna',
  description: 'A diet. Jon has me on a diet. When the lasagna content in my blood gets low, I get mean.',
  raised: 0,
  target: 20000
}, {
  id: 3,
  name: 'Jumper',
  photo: 'http://placekitten.com/g/200/100',
  project: 'World domination',
  description: 'Would you prefer me as your supreme overlord? I have two years of experience in human training and am putting together the purfect team. Please pledge soon, together we can make Ameowica great again.',
  raised: 0,
  target: 500
}];

app.use(express.static(__dirname));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/kittens', function (req, res) {
  res.json(robert);
});

app.put('/kittens/:theId', function (req, res) {
  var kittenProject = robert.find(function (elem) {
    return elem.id == req.params.theId;
  });
  kittenProject.raised += req.body.amountToAdd;
  res.sendStatus(204);
});

var port = 1337;
app.listen(port, function () {
  console.log('Server listening on port', port);
});