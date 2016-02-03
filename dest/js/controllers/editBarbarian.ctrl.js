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
        	console.log(res.data, "res.data");
            // for(var i=0; i<res.data.length; i++){
            // res.data[i].seating;
            // $scope.existedDots = res.data[i].seating;
            // $scope.existedDotsArr.push($scope.existedDots);    
            // $scope.Barbarians.push(res.data[i]);
    });
		console.log(clickedDot, "clickedDot");
		$scope.newBarbarian.seating = newBarbarian.seating;
		// console.log($scope.newBarbarian.seating, "the Seats");
	});
	$scope.newBarbarian = newBarbarian;
		// returns null for department, name, seating
	
	$scope.departments = BarbariansFactory.departments;
	
	$scope.teams = [];

	
});