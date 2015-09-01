app.controller('ClickDotCtrl', function ($scope, $interval, BarbariansFactory) {

// dots functionality
$scope.tools = ['circle'];
  $scope.currentTool = 0;
  $scope.radius = 8;
  $scope.x = 0;
  $scope.y = 0;
  $scope.lastX = 0;
  $scope.lastY = 0;
  $scope.sw = 5;
  $scope.draw = function(e) {
    $scope.lastX = $scope.x;
    $scope.lastY = $scope.y;
    $scope.x = e.offsetX;
    $scope.y = e.offsetY;
    $scope.elements.push({
      "type":$scope.currentTool,
	    "x":$scope.x,
	    "y":$scope.y,
	    "lx": $scope.lastX,
	    "ly": $scope.lastY,
	    "r": $scope.radius,
	    "f": 0,
      "sw":$scope.sw
    });
  };
  
  $scope.graph = {'width': 749, 'height': 1335};
  $scope.elements = [];
  console.log($scope.elements, "elements");

// saving dots element
// $scope.createDot = function () {
// 	BarbariansFactory.create($)
// }
  
});