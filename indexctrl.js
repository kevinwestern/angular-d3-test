app.controller('IndexCtrl', ['$scope', function($scope) {
  $scope.sets = [[10, 12, 14], [11, 9, 7], [3, 5, 11]];
  $scope.data = $scope.sets[0];
  $scope.changeTo = function(set) {
    $scope.data = set;
  };
}]);