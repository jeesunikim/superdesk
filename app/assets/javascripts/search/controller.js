module.exports = function( App ) {
    App.controller('SearchBarCtrl', [ '$scope', '$rootScope', '$http', 'BarbariansFactory', 'sharedValues', function ($scope, $rootScope, $http, BarbariansFactory, sharedValues) {

            $scope.departments = BarbariansFactory.departments;
            $scope.nameValue = sharedValues.getObject();
            $scope.deptValue = sharedValues.getObject();

            $scope.getDept = function (e) {
                if($scope.nameValue.searchName !== "") {
                    $scope.nameValue.searchName = "";
                }
                $scope.deptValue.selectedDept = e.target.value;
                console.log($scope.deptValue.selectedDept, "clicked");
            }

            $scope.runSearch = function(input) {
                $scope.nameValue.searchName = input;
            }

            $scope.$on('checkboxClicked', function () {
                $rootScope.barbarianInfo = !$rootScope.barbarianInfo;
            });    

        }
    ]);

    return App;
}