var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	BarbarianModel = require('../models/barbarians'),
	bodyParser = require('body-parser');




// Model.findById(id, function (err, doc) {
//   if (err) ..
//   doc.name = &#39;jason borne&#39;;
//   doc.save(callback);
// });


router.get('/barbarians', function(req, res, next) {
    BarbarianModel.find({}).exec()
    .then(function (barbarians) {
      res.json(barbarians);
    })
    .then(null, next);
  });
    

// router.get('/search', function(req, res) {
//     console.log("search letters are: ", req.query.search);
//     var regex = new RegExp(req.query.search, 'i');  // 'i' makes it case insensitive
//     BarbarianModel.find({name: regex}, function(err, obj){
//         if (err) {
//             return handleError(err);
//         }
//         res.json(obj);
//     });
// });

router.post('/barbarians', function (req, res, next) {
	BarbarianModel.create(req.body, function (err, newBarbarian) {
		if(err) {
			next(err);
		} else {
			res.json(newBarbarian);
		}
	});
});

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

router.get('/:id', function(req, res, next) {
	BarbarianModel.findById(req.params.id)
	.populate('person', 'firstnam')
	.exec(function (err, eachBarbarian) {
		if (err) {
	        return res.json(500, { error: 'Cannot find the phone number' });
		}
		res.json(eachBarbarian);
	});
});

module.exports = router;
