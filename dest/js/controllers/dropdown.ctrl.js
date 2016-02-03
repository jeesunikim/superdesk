app.controller('DropdownCtrl', function ($scope, $rootScope, $log, BarbariansFactory) {

	// Name, Departments, Team	

	$scope.status = {
		isopen: false
	};

	$scope.toggled = function(open) {
		$log.log('Dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};

	$scope.$on('checkboxClicked', function () {
		$rootScope.barbarianInfo = !$rootScope.barbarianInfo;
	});


  // };
	$scope.categories = BarbariansFactory.categories;
});