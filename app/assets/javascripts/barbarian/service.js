module.exports = function( App ) {
	App.factory('BarbariansFactory', [ 'addService', function (addService) {
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

			Barbarians.executive = Boolean;
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

			// Barbarians.editBarbarian = function () {
			// 	return addService.editBarbarian(id, editedBarbarian).then(function(res){
			// 			this.editedBarbarian = res;
			// 			return this.editedBarbarian;
			// 	})
			// }
			

		}
	]);

	return App;
}