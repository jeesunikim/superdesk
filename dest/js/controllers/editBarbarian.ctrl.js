app.controller('editCtrl', function ($scope, newBarbarian, BarbariansFactory, $rootScope, DotsFactory) {

	$scope.editBarbarian = function (id, newBarbarian) {
		BarbariansFactory.edit($scope.newBarbarian)
		.then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};

	$scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;
	
	$scope.teams = [];
	// $scope.selectedTeams = [];

	// for(var i=0; i<BarbariansFactory.teams.length; i++){
	// 	$scope.teams.push(BarbariansFactory.teams[i]);
	// 	if($scope.teams[i].selected == true){
	// 		$scope.selectedTeams.push($scope.team.selected)
	// 		$scope.newBarbarian.team = team.selected;
	// 	}
	// }

	console.log($scope.teams, "teams");

	$scope.addBarbarian = function (newBarbarian) {
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