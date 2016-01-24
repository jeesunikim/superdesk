app.controller('DotsCtrl', function ($scope, $rootScope, newBarbarian, $http, BarbariansFactory, DotsFactory){
    $scope.existedDots = null;
    $scope.existedDotsArr = [];
    $scope.Barbarians = [];

    $http({
        url:"/barbarians",
        method: "GET"
        }).then(function(res) {
            for(var i=0; i<res.data.length; i++){
            res.data[i].seating;
            $scope.existedDots = res.data[i].seating;
            $scope.existedDotsArr.push($scope.existedDots);    
            $scope.Barbarians.push(res.data[i]);
        }
        console.log($scope.existedDotsArr, "Existed Data");
    });

    $scope.newBarbarian = newBarbarian; 

    this.barbarianInfo = false;

    $scope.showBarbarian = function () {
        this.barbarianInfo = true;
    }

    $scope.hideBarbarian = function () {
        this.barbarianInfo = false;
    }

    $scope.addDot = function (e) {
        if($scope.enabled == true ){
        $scope.x = e.offsetX;
        $scope.y = e.offsetY;
        $scope.r = 8;
        $scope.f = 1;
        $scope.existedDotsArr.push({
            "type": $scope.currentTool,
            "x": $scope.x,
            "y": $scope.y,
            "f": 1,
            "r": 8
        });
        console.log($scope.existedDotsArr, "Existed Dots Array");
        $scope.newBarbarian.seating.x = $scope.x;   
        $scope.newBarbarian.seating.y = $scope.y;
        $scope.newBarbarian.seating.r = 8;
        DotsFactory.storedDots = angular.copy($scope.existedDotsArr);
        console.log($scope.Barbarians, "$scope.Barbarians")
        console.log($scope.newBarbarian.seating, "seating");
        $rootScope.$broadcast('dotAdded', $scope.newBarbarian);
    }}
    
    $scope.graph = DotsFactory.graph;

});