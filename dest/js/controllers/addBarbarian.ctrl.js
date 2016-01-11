app.controller('AddCtrl', function ($scope, newBarbarian, BarbariansFactory, $rootScope, DotsFactory) {
	
	$scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;
	
	$scope.teams = [];
	
	for(var i=0; i<BarbariansFactory.teams.length; i++){
		$scope.teams.push(BarbariansFactory.teams[i]);
	}

	console.log($scope.teams, "teams");

	$scope.addBarbarian = function () {
		BarbariansFactory.create($scope.newBarbarian)
		.then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};

	$scope.$on('dotAdded', function (event, newBarbarian) {
		$scope.newBarbarian.seating = newBarbarian.seating;
		console.log($scope.newBarbarian.seating, "the Seats");
	});

	console.log(BarbariansFactory.allBarbarians, "all Barbarians");

});