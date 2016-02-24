app.service('addService', function ($http) {
	// shared object
	
	this.newBarbarian = {
		name: null,
		department: null,
		seating: {
			x: null,
			y: null,
			r: null
		}
	};

	function getData(res) {
		var data = res.data;
		return data;
	}

	this.create = function (newBarbarian) {
		return $http.post('/barbarians', newBarbarian);
	};

	this.edit = function (id, newBarbarian) {
		return $http.put('/barbarians/' + id + '/edit', newBarbarian);
	};

	this.getBarbarians = function () {
		return $http.get('/barbarians')
		.then(getData)
		.catch(function() {
			console.log("We can't find any Barbarians :( ")
		});
	};

	this.delete = function (id) {
		return $http.delete('/barbarians/' + id + '/delete');
	};

});