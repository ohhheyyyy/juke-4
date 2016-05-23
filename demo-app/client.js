var app = angular.module('kittygogo', []);

app.controller('MainController', function ($scope, $http) {
  /* inputs on template: amount */
  $http.get('/kittens')
  .then(function (response) {
    $scope.kittenProjects = response.data;
  });
  $scope.addFiveToAmount = function (kittenProject) {
    $http.put('/kittens/' + kittenProject.id, {
      amountToAdd: Number($scope.user.info.amount)
    })
    .then(function () {
      kittenProject.raised += Number($scope.user.info.amount);
    });
  };

  $scope.user = {info: {amount: 5}};


});

app.controller('NavbarController', function ($scope, $timeout) {
  $scope.username = 'Omri Bernstien';
  $scope.logScope = function () {
    console.log($scope);
  };
});