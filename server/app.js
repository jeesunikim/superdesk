var express = require('express');
var path = require('path');
var BarbarianModel = require('./models/barbarians');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var indexHtmlPath = path.join(__dirname, '../index.html');
var publicPath = path.join(__dirname, '../dest');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

app.get('/', function (req, res) {
  res.sendFile(indexHtmlPath);
});

app.get('/barbarians', function(req, res, next) {
    BarbarianModel.find({}).exec()
    .then(function (barbarians) {
      res.json(barbarians);
    })
    .then(null, next);
  });

app.post('/barbarians', function (req, res, next) {
	BarbarianModel.create(req.body, function (err, newBarbarian) {
		if(err) {
			next(err);
		} else {
			res.json(newBarbarian);
		}
	});
});

app.get('/barbarians/:id', function(req, res, next) {
  BarbarianModel.findById(req.params.id)
  .exec(function (err, eachBarbarian) {
    if (err) {
        return res.json(500, { error: 'Cannot find the phone number' });
    }
    res.json(eachBarbarian);
  });
});

app.post('/barbarians/:id/update', function (req, res){
    BarbarianModel.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, function(err, editedBarbarian) {
        if (err){
            console.log('Mongo Error');
            return handleError(err);
        }
        res.json(editedBarbarian)
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;