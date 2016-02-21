app.controller('SearchBarCtrl', function ($scope, $rootScope, $http, newBarbarian, BarbariansFactory) {
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
    $rootScope.isBeingUsed = false;

    /* watching every move of selectedItem */
    $scope.$watch('selectedItem', function (){
        console.log("update, update", $scope.selectedItem.name);
        
    });    

    $scope.$on('onSearch', function (event, barbarians) {
        
        $scope.searchResults = barbarians;

        console.log(barbarians,"DEPT");

        $scope.runSearch = function(input) {
            $rootScope.searchText;
            barbarians.forEach(function (element, index) {
                if($scope.selectedItem.name == "Name"){
                    console.log(element.name, index, "hey");
                }else if($scope.selectedItem.name == "Department"){
                    console.log(element.department, index, "hey");
                }
            });

            // whatever's output should be filtered through
            console.log(input, "input");
        }
    }); 

    console.log($scope.selectedItem, "selected");
    // Object.keys(newBarbarian).forEach(function (key, index) {
    //     $scope.barbariansArr.push(key.charAt(0).toUpperCase() + key.substring(1,key.length));
    // });

    $scope.search = "";
    $scope.searchResults = [];
    $scope.departmentsArr = [];

    $scope.$on('checkboxClicked', function () {
        $rootScope.barbarianInfo = !$rootScope.barbarianInfo;
    });    

});