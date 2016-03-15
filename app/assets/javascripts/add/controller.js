module.exports = function( App ) {
	App.controller('AddCtrl', ['$scope', 'addService', 'BarbariansFactory', '$rootScope' , function ($scope, addService, BarbariansFactory, $rootScope) {
			// AddController only works if $scope.enabled is set to true
			$rootScope.enabled = false;

			$scope.$on('formEnabled', function () {
				$rootScope.enabled = !$rootScope.enabled;
			});



			$scope.newBarbarian = addService.newBarbarian;
				// returns null for department, name, seating
			
			$scope.departments = BarbariansFactory.departments;

			$scope.executive = BarbariansFactory.executive;

			$scope.checking = function() {

				console.log($scope.executive, "checking");
			}
			

			$scope.addBarbarian = function (newBarbarian) {
				addService.create($scope.newBarbarian);
			};
			$scope.$on('dotAdded', function (event, newBarbarian) {
				$scope.newBarbarian.seating = newBarbarian.seating;
			});
		}
	]);
	return App;
};