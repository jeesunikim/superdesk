app.controller('modalCtrl', function($scope, addService, BarbariansFactory, $rootScope) {
    $scope.eachBarbarian;
    $scope.departments = BarbariansFactory.departments;

    $scope.$on('dotClicked', function (event, res){
        addService.getOneBarbarian(res).then(function(data){
            $scope.itsId = res;
            $scope.eachBarbarian = data;
        });

        console.log($scope.eachBarbarian, "data name");
    })
    $scope.editBarbarian = function (clickedDot, eachBarbarian) {
        clickedDot = $scope.itsId;
        addService.editBarbarian(clickedDot, eachBarbarian);
        $scope.hideModal();
    };
    };
});

app.directive('modalDialog', function() {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
replace: true, // Replace with the template below
transclude: true, // we want to insert custom content inside the directive
link: function(scope, element, attrs) {
    scope.dialogStyle = {};
    if (attrs.width)
        scope.dialogStyle.width = attrs.width;
    if (attrs.height)
        scope.dialogStyle.height = attrs.height;
    scope.hideModal = function() {
        scope.show = false;
    };
},
templateUrl: '/js/directive/modal.html',
controller: 'modalCtrl'
};
});

