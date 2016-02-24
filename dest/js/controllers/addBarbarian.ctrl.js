app.controller('AddCtrl', function ($scope, addService, BarbariansFactory, $rootScope, DotsFactory) {
	
	// AddController only works if $scope.enabled is set to true
	$rootScope.enabled = false;
	$scope.$on('formEnabled', function () {
		$rootScope.enabled = !$rootScope.enabled;
	});

	$scope.newBarbarian = addService.newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;

	$scope.addBarbarian = function (newBarbarian) {
		addService.create($scope.newBarbarian);
	};
	$scope.$on('dotAdded', function (event, newBarbarian) {
		$scope.newBarbarian.seating = newBarbarian.seating;
	});
});