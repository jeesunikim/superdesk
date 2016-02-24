app.controller('editCtrl', function ($scope, $http, BarbariansFactory, $rootScope, DotsFactory) {

	// $scope.editBarbarian = function (id, newBarbarian) {
	// 	BarbariansFactory.edit($scope.newBarbarian)
	// 	.then(function (newBarbarian) {
	// 		BarbariansFactory.allBarbarians.push(newBarbarian);
	// 	});
	// };

	$scope.eachBarbarian;

	$scope.$on('dotClicked', function (event, clickedDot) {
		$http({
        url:"/barbarians/" + clickedDot,
        method: "GET"
        }).then(function(res) {
    		$scope.eachBarbarian = res.data;
    		console.log($scope.eachBarbarian, "each");
    		// this is where moving the seat dots should happen as well.
	    });
	});

	$scope.editBarbarian = function() {
		$http({
			url:"/update",
			method: "POST",
			data: $scope.eachBarbarian
		})
	}

	// $scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;
	
});