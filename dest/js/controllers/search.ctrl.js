app.controller('SearchBarCtrl', function ($scope, $rootScope, $http, BarbariansFactory, sharedValues) {
    // Iterating Object Properties
 
    $scope.departments = BarbariansFactory.departments;
    $scope.nameValue = sharedValues.getObject();
    $scope.deptValue = sharedValues.getObject();

    $scope.getDept = function (e) {
        if($scope.nameValue.searchName !== "") {
            $scope.nameValue.searchName = "";
        }
        $scope.deptValue.selectedDept = e.target.value;
    }

    $scope.runSearch = function(input) {
        $scope.nameValue.searchName = input;
    }

    $scope.$on('checkboxClicked', function () {
        $rootScope.barbarianInfo = !$rootScope.barbarianInfo;
    });    

});