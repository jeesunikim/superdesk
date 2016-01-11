app.controller('AddCtrl', function ($scope, newBarbarian, BarbariansFactory, $rootScope, DotsFactory) {
	
	$scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	console.log($scope.newBarbarian, "scope.newBarbarian");
	$scope.departments = BarbariansFactory.departments;
	$scope.teams = BarbariansFactory.teams;
    $rootScope.$broadcast('fieldsAdded', $scope.newBarbarian);


	$scope.addBarbarian = function () {
		BarbariansFactory.create($scope.newBarbarian)
		.then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};


	$scope.$on('dotAdded', function (event, newBarbarian) {
		$scope.newBarbarian = newBarbarian;
		$scope.addBarbarian();
		// angular.extend(newBarbarian, $scope.newBarbarian)
	});
	console.log(BarbariansFactory.allBarbarians, "all Barbarians");

});