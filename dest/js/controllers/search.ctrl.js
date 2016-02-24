app.controller('SearchBarCtrl', function ($scope, $rootScope, $http, BarbariansFactory) {
    // Iterating Object Properties
 


    $scope.departments = BarbariansFactory.departments;
    $rootScope.fields = {
        searchBarbarian: BarbariansFactory.fields.searchBarbarian,
        selectedDept: BarbariansFactory.fields.selectedDept
    }
    console.log(BarbariansFactory.fields.searchModel, "fields");
    $rootScope.isBeingUsed = false;
    $scope.getDept = function (e) {
        $rootScope.fields.selectedDept = e.target.value;

            $rootScope.fields.searchBarbarian = "";

    }

    // $scope.$on('onSearch', function (event, barbarians) {
        
    //     $scope.searchResults = barbarians;

    //     console.log(barbarians,"DEPT");

    $rootScope.fields = $rootScope.fields || {};

    $scope.runSearch = function(input) {
        $rootScope.fields.searchBarbarian = input;
        // console.log($rootScope.fields.searchModel, "searching");
        // if($scope.selectedItem.name == "Department") {
        //     $scope.departments.forEach(function(element){
        //         if((element.name) == $rootScope.searchText){
        //             console.log(element.name, "hey");
        //             return true;
        //         }
        //     });
        // }
    }
    // }); 

    $scope.$on('checkboxClicked', function () {
        $rootScope.barbarianInfo = !$rootScope.barbarianInfo;
    });    

});