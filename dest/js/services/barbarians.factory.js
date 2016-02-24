app.factory('BarbariansFactory', function (addService) {
	// shared function
	var Barbarians = {};

	Barbarians.categories = [
		'Name',
		'Department'
	];

	Barbarians.departments =[
		'Account',
		'Analytics',
		'CMS',
		'Creative',
		'Executive',
		'Finance',
		'HR',
		'IT',
		'Lot112',
		'Media & Distribution',
		'Production',
		'PR',
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

	// Barbarians.fields = {
	// 	searchBarbarian: '',
 //    selectedDept: ''
	// }

	return Barbarians;

});