app.controller('AddCtrl', function ($scope, newBarbarian, BarbariansFactory, $rootScope, DotsFactory) {
	
	// AddController only works if $scope.enabled is set to true
	$rootScope.enabled = false;
	$scope.$on('formEnabled', function () {
		$rootScope.enabled = !$rootScope.enabled;
	});

	$scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;
	
	$scope.teams = [];


	$scope.addBarbarian = function (newBarbarian) {
		BarbariansFactory.create($scope.newBarbarian)
		.then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};
	$scope.$on('dotAdded', function (event, newBarbarian) {
		$scope.newBarbarian.seating = newBarbarian.seating;
		// console.log($scope.newBarbarian.seating, "the Seats");
	});

	// console.log(BarbariansFactory.allBarbarians, "all Barbarians");

});