app.controller('editCtrl', function ($scope, $http, newBarbarian, BarbariansFactory, $rootScope, DotsFactory) {

	$scope.editBarbarian = function (id, newBarbarian) {
		BarbariansFactory.edit($scope.newBarbarian)
		.then(function (newBarbarian) {
			BarbariansFactory.allBarbarians.push(newBarbarian);
		});
	};

	$scope.$on('dotClicked', function (event, clickedDot) {
		$http({
        url:"/barbarians/" + clickedDot,
        method: "GET"
        }).then(function(res) {
    		$scope.eachBarbarian = res.data;
    		// this is where moving the seat dots should happen as well.
	    });
	});
	$scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;
	
	$scope.teams = [];

	
});