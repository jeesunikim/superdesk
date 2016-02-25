app.controller('editCtrl', function ($scope, BarbariansFactory, addService) {

	$scope.eachBarbarian;
	// $scope.editBarbarian = "hey";
	$scope.departments = BarbariansFactory.departments;

	$scope.$on('dotClicked', function (event, clickedDot) {
		console.log("dot is clicked");
		addService.getOneBarbarian(clickedDot).then(function(res){
			$scope.eachBarbarian = res;
		});

	});
		// Below doesn't work
			// $scope.editBarbarian.name = "monkey";
			// $scope.editBarbarian.department = "UX";

	$scope.editBarbarian = function (clickedDot, eachBarbarian) {
			clickedDot = $scope.eachBarbarian._id;
			addService.editBarbarian(clickedDot, $scope.editBarbarian);
		};

});