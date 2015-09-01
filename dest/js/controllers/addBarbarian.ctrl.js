app.controller('addBarbarianController', function ($scope, BarbariansFactory) {

	$scope.addBarbarian = function () {
		BarbariansFactory.create($scope.newBarbarian).then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};

	$scope.newEmployee = {
		name: null,
		department: null,
		team: null,
		seating: {
			x: null,
			y: null,
			r: null
		}
	};

	// seating will be the point that the user clicks.
});