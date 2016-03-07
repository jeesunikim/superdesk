module.exports = function( App ) {
    App.controller('BarbarianCtrl', ['$scope', '$rootScope', 'addService', 'BarbariansFactory', 'sharedValues', function ($scope, $rootScope, addService, BarbariansFactory, sharedValues){
            $scope.existedDots = null;
            $scope.existedDotsArr = [];
            $scope.Barbarians = [];
            $scope.BarbariansDep = [];
            $scope.BarbariansNames = [];
            $scope.modalShown = false;

            BarbariansFactory.allBarbarians().then(function(each){
                $scope.Barbarians = each;
                each.forEach(function (element) {
                    $scope.existedDotsArr.push(element.seating); //each Barbarian's dot is being stored in an array
                    $scope.BarbariansDep.push(element.department);
                    $scope.BarbariansNames.push(element.name);
                });
            });

            $scope.newBarbarian = addService.newBarbarian; 
            $scope.nameValue = sharedValues.getObject();
            $scope.deptValue = sharedValues.getObject();
            // $scope.searchedInput = $rootScope.fields.searchModel; 
            // $scope.selectedSelect = $rootScope.fields.selectedItem; 
            // console.log($scope.searchedInput, "searchModel rootscope", $scope.selectedSelect, "selectedSelect");

            this.barbarianInfo = false;

            $rootScope.showBarbarian = function () {
                this.barbarianInfo = true;
            }

            $rootScope.hideBarbarian = function () {
                this.barbarianInfo = false;
            }

            $scope.getId = function (event) {
                $scope.modalShown = !$scope.modalShown;
                $scope.clickedDot = event.target.id;
                $rootScope.$broadcast('dotClicked', $scope.clickedDot);
            } 
            
            /* Add a dot */
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
                $rootScope.$broadcast('dotAdded', $scope.newBarbarian);
            }}
            
            $scope.graph = {'width': 1200, 'height': 900};

        }
    ]);

    return App;
}