app.controller('DotsCtrl', function ($scope, newBarbarian, $http, BarbariansFactory, DotsFactory) {

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

             console.log($scope.existedDotsArr, "Data");
        }
    });

    // dots functionality
    $scope.tools = ['circle'];
    $scope.currentTool = 0;
    $scope.radius = 8;
    $scope.x = 0;
    $scope.y = 0;
    $scope.lastX = 0;
    $scope.lastY = 0;
    $scope.sw = 5;

    $scope.newBarbarian = newBarbarian;
    
    // if(!$scope.newBarbarian) {
    //     $scope.newBarbarian
    // };

   $scope.seatDot = function (e) {
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
            "r": $scope.radius,
            "f": 1,
            "sw": $scope.sw
        });

        $scope.newBarbarian.newBarbarian.seating.x = $scope.x;
        $scope.newBarbarian.newBarbarian.seating.y = $scope.y;
        $scope.newBarbarian.newBarbarian.seating.r = $scope.radius;

        console.log($scope.newBarbarian.newBarbarian.seating, "seating");
    }

    $scope.graph = DotsFactory.graph;

});