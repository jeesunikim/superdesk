app.controller('SearchBarCtrl', function ($scope, $rootScope, $http, BarbariansFactory) {
    // Iterating Object Properties
    this.barbariansArr = [
        {
            name: "Search Barbarian(s) by:",
            selectable: false
        },
        {
            name: "Name",
            selectable: true
        },
        {
            name: "Department",
            selectable: true
        }
    ];



    $scope.departments = BarbariansFactory.departments;
    $scope.fields = {
        searchModel: BarbariansFactory.fields.searchModel,
        selectedItem: BarbariansFactory.fields.selectedItem
    }
    console.log(BarbariansFactory.fields.searchModel, "fields");
    $rootScope.isBeingUsed = false;

    /* watching every move of selectedItem */
    $scope.$watch('selectedItem', function (){
        // console.log("update", $scope.fields.selectedItem.name);
    });    

    // $scope.$on('onSearch', function (event, barbarians) {
        
    //     $scope.searchResults = barbarians;

    //     console.log(barbarians,"DEPT");

    $rootScope.fields = $rootScope.fields || {};

    $scope.runSearch = function(input) {
        $rootScope.fields.searchModel = input;
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