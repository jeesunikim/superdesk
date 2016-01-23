app.factory('newBarbarian', function () {

	var newBarbarian = {
		name: null,
		department: null,
		teams: {
			"Samsung": false,
			"Etihad": false,
			"Kind": false,
			"Pepsi": false
		},
		seating: {
			x: null,
			y: null,
			r: null
		}
	};

	return newBarbarian;
		
});