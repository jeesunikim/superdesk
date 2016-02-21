app.controller('SearchBarCtrl', function ($scope, $rootScope, $http, newBarbarian, BarbariansFactory) {
    // Iterating Object Properties
    $scope.barbariansArr = [
        {
            name: "Search Barbarian(s) by:",
            selectable: true
        },
        {
            name: "Name",
            selectable: false
        },
        {
            name: "Department",
            selectable: false
        }
    ];

    $scope.selectedItem = $scope.barbariansArr[0].name;

    /* watching every move of selectedItem */
    $scope.$watch('selectedItem', function (){
        console.log("update, update", $scope.selectedItem.name);
    });


     $scope.$on('onSearch', function (event, barbarians) {
        $rootScope.searchText;
        $scope.searchResults = barbarians;

        $rootScope.runSearch = function() {
            barbarians.forEach(function (element, index) {
                if($scope.selectedItem.name == "Name"){
                    console.log(element.name, index, "hey");
                }else if($scope.selectedItem.name == "Department"){
                    console.log(element.department, index, "hey");
                }
            });
        }
    }); 

    console.log($scope.selectedItem, "selected");
    // Object.keys(newBarbarian).forEach(function (key, index) {
    //     $scope.barbariansArr.push(key.charAt(0).toUpperCase() + key.substring(1,key.length));
    // });

    $scope.search = "";
    $scope.searchResults = [];

    $scope.departmentsArr = [];
    $scope.departments = null;

    $scope.$on('checkboxClicked', function () {
        $rootScope.barbarianInfo = !$rootScope.barbarianInfo;
    });    

});