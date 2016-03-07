module.exports = function( App ) {
    App.controller('editCtrl', [ '$scope', 'addService', 'BarbariansFactory', '$rootScope', function($scope, addService, BarbariansFactory, $rootScope) {
            $scope.eachBarbarian;
            $scope.departments = BarbariansFactory.departments;

            $scope.$on('dotClicked', function (event, res){
                addService.getBarbarianByID(res).then(function(data){
                    $scope.itsId = res;
                    $scope.eachBarbarian = data;
                });
            });

            $scope.editBarbarian = function (clickedDot, eachBarbarian) {
                clickedDot = $scope.itsId;
                addService.editBarbarian(clickedDot, eachBarbarian);
                $scope.hideModal();
            };
            $scope.deleteBarbarian = function (clickedDot) {
                clickedDot = $scope.itsId;
                addService.delete(clickedDot);
                $scope.hideModal();
            };
        }
    ]);

    return App;
}