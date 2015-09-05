var express = require('express');
var path = require('path');
var BarbarianModel = require('./models/barbarians');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('../routes/index');
// var users = require('../routes/users');

var app = express();

// The path of our index.html file
var indexHtmlPath = path.join(__dirname, '../index.html');
var publicPath = path.join(__dirname, '../dest');
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

// app.use('/', routes);
// app.use('/users', users);

app.get('/', function (req, res) {
  res.sendFile(indexHtmlPath);
});

// app.get('/barbarians', function (req, res) {
//   BarbarianModel.findById(req.query.id, function(err, barbarians) {
//   	if(err){
//   		res.json( {error: "Mongo Error" })
//   	} else {
//   		res.json(barbarians);
//   	};
// });
// });


// app.get('/barbarians', function(req, res) {
//     var idsToSearch = req.query.id.split(',');
//     console.log(idsToSearch);
//     BarbarianModel.find({'_id': { $in: idsToSearch } }, function(err, obj) {
//         console.log(obj);
//         res.send(obj);
//     });
// });

app.get('/barbarians', function(req, res, next) {
    BarbarianModel.find({}).exec()
    .then(function (barbarians) {
      res.json(barbarians);
    })
    .then(null, next);
  });
    

app.get('/search', function(req, res) {
    console.log("search letters are: ", req.query.search);
    var regex = new RegExp(req.query.search, 'i');  // 'i' makes it case insensitive
    BarbarianModel.find({name: regex}, function(err, obj){
        if (err) {
            return handleError(err);
        }
        res.json(obj);
    });
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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;