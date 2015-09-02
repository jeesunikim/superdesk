app.controller('addBarbarianController', function ($scope, newBarbarian, BarbariansFactory) {

	$scope.addBarbarian = function () {
		BarbariansFactory.create($scope.newBarbarian).then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};

	$scope.departments = BarbariansFactory.departments;

	$scope.newBarbarian = newBarbarian;
	if(!$scope.newBarbarian) {
		$scope.newBarbarian = {
			name: null,
			department: null,
			// team: null,
			seating: {
				x: null,
				y: null,
				r: null
			}
		};
	}

	// seating will be the point that the user clicks.
});