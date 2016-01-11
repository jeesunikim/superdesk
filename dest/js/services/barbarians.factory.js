app.factory('BarbariansFactory', function ($http) {
	var Barbarians = {};

	Barbarians.categories = [
		'Name',
		'Department',
		'Team'
	];

	Barbarians.departments =[
		'Account Management',
		'Analytics',
		'CMS',
		'Creative',
		'Executive',
		'Finance',
		'Human Resources',
		'IT',
		'Lot112',
		'Media & Distribution',
		'Production',
		'Public Relations',
		'QA',
		'Strategy',
		'Technology',
		'UX'
	];

	Barbarians.seating = {
		"r": null,
		"x": null,
		"y": null 
	}
	
	Barbarians.teams = [
		'Samsung',
		'Pepsi',
		'Etihad',
		'Kind'
	]

	Barbarians.allBarbarians = [];

	Barbarians.create = function (newBarbarian) {
		return $http.post('/barbarians', newBarbarian);
	};

	Barbarians.edit = function (id, newBarbarian) {
		return $http.put('/barbarians/' + id + '/edit', newBarbarian);
	};

	Barbarians.get = function () {

		return $http.get('/barbarians').then(function (response) {
			Barbarians.allBarbarians = response.data;
			return response.data;
		});
	};

	Barbarians.delete = function (id) {
		return $http.delete('/barbarians/' + id + '/delete');
	};

	return Barbarians;

})