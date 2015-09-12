app.controller('DotsCtrl', function ($scope, $rootScope, newBarbarian, $http, BarbariansFactory, DotsFactory) {
    // Existing Dots
    $scope.existedDots = null;
    $scope.existedDotsArr = [];

    $http({
        url:"/barbarians",
        method: "GET"
    }).then(function(res) {
        for(var i=0; i<res.data.length; i++){
            res.data[i].seating;
             
             $scope.existedDots = res.data[i].seating;
             $scope.existedDotsArr.push($scope.existedDots);

             
        }
        console.log($scope.existedDotsArr, "Existed Data");
    });

    // dots functionality
    $scope.tools = ['circle'];
    $scope.currentTool = 0;
    // $scope.radius = 8;
    $scope.x = 0;
    $scope.y = 0;
    $scope.lastX = 0;
    $scope.lastY = 0;

    $scope.newBarbarian = newBarbarian;
    console.log($scope.newBarbarian.seating, "newbarbarian");
    
   $scope.addDot = function (e) {
        $scope.lastX = $scope.x;
        $scope.lastY = $scope.y;
        $scope.x = e.offsetX;
        $scope.y = e.offsetY;
        $scope.existedDotsArr.push({
            "type": $scope.currentTool,
            "x": $scope.x,
            "y": $scope.y,
            "lx": $scope.lastX,
            "ly": $scope.lastY,
            "r": 8,
            "f": 1,
            "sw": 5
        });

        $scope.newBarbarian.seating.x = $scope.x;
        $scope.newBarbarian.seating.y = $scope.y;
        $scope.newBarbarian.seating.r = 8;
        DotsFactory.storedDots = angular.copy($scope.existedDotsArr);
        console.log(DotsFactory.storedDots, "DotsFactory altogether");
        console.log($scope.newBarbarian.seating, "seating");

        $rootScope.$broadcast('dotAdded', $scope.newBarbarian);
    }

    $scope.graph = DotsFactory.graph;

});