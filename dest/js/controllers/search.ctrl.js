app.controller('SearchBarCtrl', function ($scope, newBarbarian, BarbariansFactory, $http, $timeout) {
    $scope.search = "";
    $scope.searchResults = "";
    $scope.runSearch = function() {
        $scope.loading = true;
        $http({
            url: '/search',
            method: "GET",
            params: {
                search: $scope.search
            }
        }).then(function(res) {
            if (!!$scope.search) {
                $scope.searchResults = res.data;
            } else {
                console.log("search results set to blank string");
                $scope.searchResults = "";
            }
            $timeout(function() {
                $scope.loading = false;
            }, 250);
        });
    };

    $scope.collapseSearch = function() {
        $scope.searchResults = "";
    };

});