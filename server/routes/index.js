var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	BarbarianModel = require('../models/barbarians'),
	bodyParser = require('body-parser');

router.get('/barbarians', function(req, res, next) {
    BarbarianModel.find({}).exec()
    .then(function (barbarians) {
      res.json(barbarians);
    })
    .then(null, next);
  });

router.post('/barbarians', function (req, res, next) {
	BarbarianModel.create(req.body, function (err, newBarbarian) {
		if(err) {
			next(err);
		} else {
			res.json(newBarbarian);
		}
	});
});

router.post('/update', function (req, res, next) {
	BarbarianModel.findByIdAndUpdate({
		console.log(req.body._id, "req id");
		_id: req.body._id
	}, req.body, function(err, obj){
		if (err) {
            console.log("Mongo error_,e!");
            next(err);
        }
        res.json(obj);
	})
});

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

router.get('/barbarians/:id', function(req, res, next) {
	BarbarianModel.findById(req.body.id)
	.populate('person', 'firstnam')
	.exec(function (err, eachBarbarian) {
		if (err) {
	        return res.json(500, { error: 'Cannot find the phone number' });
		}
		res.json(eachBarbarian);
	});
});

module.exports = router;
