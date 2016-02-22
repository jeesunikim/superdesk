app.factory('BarbariansFactory', function (addService) {
	var Barbarians = {};

	Barbarians.categories = [
		'Name',
		'Department'
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
	};

	Barbarians.allBarbarians = function () {
		return addService.getBarbarians().then(function (res){
					this.existedDots = res;
          return this.existedDots;
      });
	};

	return Barbarians;

});