app.controller('addBarbarianController', function ($scope, newBarbarian, BarbariansFactory, DotsFactory) {
	
	$scope.newBarbarian = newBarbarian;

	$scope.departments = BarbariansFactory.departments;

	$scope.addBarbarian = function () {
		BarbariansFactory.create($scope.newBarbarian)
		.then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};

	$scope.$on('dotAdded', function (evnt, newBarbarian) {
		$scope.newBarbarian = newBarbarian;
		$scope.addBarbarian();
	});

	console.log($scope.newBarbarian.seating, "controller's newbarbarianseat")

});